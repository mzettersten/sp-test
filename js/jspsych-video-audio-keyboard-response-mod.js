/**
 * jspsych-video-keyboard-response
 * Josh de Leeuw
 *
 * plugin for playing a video file and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["video-audio-keyboard-response-mod"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('video-audio-keyboard-response-mod', 'stimulus', 'video');

  plugin.info = {
    name: 'video-audio-keyboard-response-mod',
    description: '',
    parameters: {
      sources: {
        type: jsPsych.plugins.parameterType.VIDEO,
        pretty_name: 'Video',
        default: undefined,
        description: 'The video file to play.'
      },
      stimulus: {
        type: jsPsych.plugins.parameterType.AUDIO,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The audio to be played.'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Choices',
        array: true,
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt1: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt1',
        default: null,
        description: 'Any content here will be displayed above the stimulus.'
      },
      prompt2: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt2',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Width',
        default: '',
        description: 'The width of the video in pixels.'
      },
      height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Height',
        default: '',
        description: 'The height of the video display in pixels.'
      },
      autoplay: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Autoplay',
        default: false,
        description: 'If true, the video will begin playing as soon as it has loaded.'
      },
      controls: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Controls',
        default: false,
        description: 'If true, the subject will be able to pause the video or move the playback to any point in the video.'
      },
      start: {
        type: jsPsych.plugins.parameterType.FLOAT,
        pretty_name: 'Start',
        default: null,
        description: 'Time to start the clip.'
      },
      stop: {
        type: jsPsych.plugins.parameterType.FLOAT,
        pretty_name: 'Stop',
        default: null,
        description: 'Time to stop the clip.'
      },
      rate: {
        type: jsPsych.plugins.parameterType.FLOAT,
        pretty_name: 'Rate',
        default: 1,
        description: 'The playback rate of the video. 1 is normal, <1 is slower, >1 is faster.'
      },
      trial_ends_after_video: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'End trial after video finishes',
        default: false,
        description: 'If true, the trial will end immediately after the video finishes playing.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, the trial will end when subject makes a response.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // setup stimulus
    var video_html = '<div>'

    // add prompt if there is one
    if (trial.prompt1 !== null) {
      video_html += trial.prompt1;
    }

    video_html += '<video playsinline preload="none" id="jspsych-video-audio-keyboard-response-mod-stimulus" poster ="img/duck.jpg" onclick="this.play();"';

    if(trial.width) {
      video_html += ' width="'+trial.width+'"';
    }
    if(trial.height) {
      video_html += ' height="'+trial.height+'"';
    }
    if(trial.autoplay){
      video_html += " autoplay ";
    }
    if(trial.controls){
      video_html +=" controls ";
    }
    video_html +=">";

    var video_preload_blob = jsPsych.pluginAPI.getVideoBuffer(trial.sources[0]);
    if(!video_preload_blob) {
      for(var i=0; i<trial.sources.length; i++){
        var file_name = trial.sources[i];
        if(file_name.indexOf('?') > -1){
          file_name = file_name.substring(0, file_name.indexOf('?'));
        }
        var type = file_name.substr(file_name.lastIndexOf('.') + 1);
        type = type.toLowerCase();
        video_html+='<source src="' + file_name + '" type="video/'+type+'">';
      }
    }
    video_html += "</video>";
	
    // setup audio stimulus
    var context = jsPsych.pluginAPI.audioContext();
    if(context !== null){
      var source = context.createBufferSource();
      source.buffer = jsPsych.pluginAPI.getAudioBuffer(trial.stimulus);
      source.connect(context.destination);
    } else {
      var audio = jsPsych.pluginAPI.getAudioBuffer(trial.stimulus);
      audio.currentTime = 0;
    }

    // add prompt if there is one
    if (trial.prompt2 !== null) {
      video_html += trial.prompt2;
    }

    // video_html += "<button onclick='playVid()' type='button'>Play Video</button>";

    video_html += "</div>";

    display_element.innerHTML = video_html;
	

    if(video_preload_blob){
      display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').src = video_preload_blob;
    }
	
	display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').onplay = function(){
	    // start audio
	    if(context !== null){
	      startTime = context.currentTime;
	      source.start(startTime);
	    } else {
	      audio.play();
	    }
	}
    

    // var video = document.getElementById('video');
    //
    // function playVid() {
    //   video.play();
    // }

    display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').onended = function(){
      if(trial.trial_ends_after_video){
        end_trial();
      }
    }

    if(trial.start !== null){
      display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').currentTime = trial.start;
    }

    if(trial.stop !== null){
      display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').addEventListener('timeupdate', function(e){
        var currenttime = display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').currentTime;
        if(currenttime >= trial.stop){
          display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').pause();
	      // stop the audio file if it is playing
	      if(context !== null){
			  source.stop();
	      } else {
	        audio.pause();
	      }
        }
      })
    }

    display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').playbackRate = trial.rate;

    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-video-audio-keyboard-response-mod-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false,
      });
    }

    // end trial if time limit is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }
  };

  return plugin;
})();