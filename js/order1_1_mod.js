/// Starting within-subject conditions ///
//////////////////////////////////////////
// for sc-label-first condition
var sc_label_first_training1 = [
  {image1: 'img/1.png', image2: 'img/5.png', video: 'video/blicket-toma-1.mp4', audio: 'vidaudio/blicket-toma-1.mp4.mp3'},
  {image1: 'img/1.png', image2: 'img/5.png', video: 'video/blicket-toma-4.mp4', audio: 'vidaudio/blicket-toma-4.mp4.mp3'}
];

var sc_label_first_training2 = [
  {image1: 'img/9.png', image2: 'img/15.png', video: 'video/gazzer-numo-1.mp4', audio: 'vidaudio/gazzer-numo-1.mp4.mp3'},
  {image1: 'img/9.png', image2: 'img/15.png', video: 'video/gazzer-numo-4.mp4', audio: 'vidaudio/gazzer-numo-4.mp4.mp3'}
];

var sc_label_first_test_images1 = [
  {image1: '<img src="img/1.png" width="40%"/>', image2: '<img src="img/5.png" width="40%"/>', audio: "audio/norm_blicket.m4a"},
  {image1: '<img src="img/1.png" width="40%"/>', image2: '<img src="img/5.png" width="40%"/>', audio: "audio/norm_toma.m4a"}
];

var sc_label_first_test_images2 = [
  {image1: '<img src="img/9.png" width="40%"/>',  image2: '<img src="img/15.png" width="40%"/>', audio: "audio/norm_gazzer.m4a" },
  {image1: '<img src="img/9.png" width="40%"/>',  image2: '<img src="img/15.png" width="40%"/>', audio: "audio/norm_numo.m4a" }
];

//nsc-label-sc_label
var nsc_label_first_training1 = [
  {image1: 'img/2.png', image2: 'img/6.png', video: 'video/fopin-nissle-1.mp4'},
  {image1: 'img/2.png', image2: 'img/6.png', video: 'video/fopin-nissle-4.mp4'}
];

var nsc_label_first_training2 = [
  {image1: 'img/13.png', image2: 'img/14.png', video: 'video/chamu-dakup-1.mp4'},
  {image1: 'img/13.png', image2: 'img/14.png', video: 'video/chamu-dakup-4.mp4'}
];

var nsc_label_first_test_images1 = [
  {image1: '<img src="img/2.png" width="40%"/>', image2: '<img src="img/6.png" width="40%"/>', audio: "audio/norm_fopin.m4a" },
  {image1: '<img src="img/2.png" width="40%"/>', image2: '<img src="img/6.png" width="40%"/>', audio: "audio/norm_nissle.m4a" }
];

var nsc_label_first_test_images2 = [
  {image1: '<img src="img/13.png" width="40%"/>',  image2: '<img src="img/14.png" width="40%"/>', audio: "audio/norm_chamu.m4a" },
  {image1: '<img src="img/13.png" width="40%"/>',  image2: '<img src="img/14.png" width="40%"/>', audio: "audio/norm_dakup.m4a" }
];

//sc_label_last
var sc_label_last_training1 = [
  {image1: 'img/3.png', image2: 'img/7.png', video: 'video/tentle-paegu-1.mp4'},
  {image1: 'img/3.png', image2: 'img/7.png', video: 'video/tentle-paegu-4.mp4'}
];

var sc_label_last_training2 = [
  {image1: 'img/11.png', image2: 'img/10.png', video: 'video/klefu-jimo-1.mp4'},
  {image1: 'img/11.png', image2: 'img/10.png', video: 'video/klefu-jimo-4.mp4'}
];

var sc_label_last_test_images1 = [
  {image1: '<img src="img/3.png" width="40%"/>', image2: '<img src="img/7.png" width="40%"/>', audio: "audio/norm_tentle.m4a" },
  {image1: '<img src="img/3.png" width="40%"/>',  image2: '<img src="img/7.png" width="40%"/>', audio: "audio/norm_paegu.m4a" }
];

var sc_label_last_test_images2 = [
  {image1: '<img src="img/11.png" width="40%"/>', image2: '<img src="img/10.png" width="40%"/>', audio: "audio/norm_klefu.m4a" },
  {image1: '<img src="img/11.png" width="40%"/>',  image2: '<img src="img/10.png" width="40%"/>', audio: "audio/norm_jimo.m4a" }
];

//nsc_label_last
var nsc_label_last_training1 = [
  {image1: 'img/4.png', image2: 'img/8.png', video: 'video/reko-vugim-1.mp4'},
  {image1: 'img/4.png', image2: 'img/8.png', video: 'video/reko-vugim-4.mp4'}
];

var nsc_label_last_training2 = [
  {image1: 'img/12.png', image2: 'img/16.png', video: 'video/miffle-zibo-1.mp4'},
  {image1: 'img/12.png', image2: 'img/16.png', video: 'video/miffle-zibo-4.mp4'}
];

var nsc_label_last_test_images1 = [
  {image1: '<img src="img/4.png" width="40%"/>', image2: '<img src="img/8.png" width="40%"/>', audio: "audio/norm_reko.m4a" },
  {image1: '<img src="img/4.png" width="40%"/>',  image2: '<img src="img/8.png" width="40%"/>', audio: "audio/norm_vugim.m4a" }
];

var nsc_label_last_test_images2 = [
  {image1: '<img src="img/12.png" width="40%"/>', image2: '<img src="img/16.png" width="40%"/>', audio: "audio/norm_miffle.m4a" },
  {image1: '<img src="img/12.png" width="40%"/>',  image2: '<img src="img/16.png" width="40%"/>', audio: "audio/norm_zibo.m4a" }
];

var duck_audio = {
  type: 'audio-keyboard-response',
  stimulus: 'audio/norm_touch_duck.m4a',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000
}

// creating sc_label_first condition
var order1_1_sc_label_first = function() {

  var feedback = {
    type: 'audio-keyboard-response',
    stimulus: 'audio/goodjob.m4a',
    prompt: "<img src='img/greatjob.png'/>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 2000,
    post_trial_gap: 1000
  }

  var shuffledArray = jsPsych.randomization.repeat(sc_label_first_test_images1, 2);
  var shuffledArray2 = jsPsych.randomization.repeat(sc_label_first_test_images2, 2);

  // deciding trial order
  var x = Math.random()

  if (x < 0.5) {
    var y = getRandomInt(2);

    var training_video = [sc_label_first_training1[y].video];
    var training_img = [sc_label_first_training1[y].image1, sc_label_first_training1[y].image2];
	var training_audio = [sc_label_first_training1[y].audio];

    timeline.push(duck_audio);

    var training_trial = {
      type: 'video-audio-keyboard-response-mod',
      sources: training_video,
		stimulus: training_audio,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-first',
        order: '1-1'
      }
    }

    timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2];
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'sc-label-first',
              order: '1-1'
            }
        };

        timeline.push(test_trial1_1);
        timeline.push(test_trial1_2);
    }

    timeline.push(feedback);

    var y = getRandomInt(2);

    var training_video = [sc_label_first_training2[y].video];
    var training_img = [sc_label_first_training2[y].image1, sc_label_first_training2[y].image2];
	var training_audio = [sc_label_first_training2[y].audio];

    timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-audio-keyboard-response-mod',
      sources: training_video,
		stiimulus: training_audio,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-first',
        order: '1-1'
      }
    }

    timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'sc-label-first',
              order: '1-1'
            }
        };

        timeline.push(test_trial2_1);
        timeline.push(test_trial2_2);

    }
    //timeline.push(feedback);

  } else {

    var y = getRandomInt(2);

    var training_video = [sc_label_first_training2[y].video];
    var training_img = [sc_label_first_training2[y].image1, sc_label_first_training2[y].image2];
	var training_audio = [sc_label_first_training2[y].audio];

    timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-audio-keyboard-response-mod',
      sources: training_video,
		stimulus: training_audio,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-first',
        order: '1-1'
      }
    }

    //timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'sc-label-first',
              order: '1-1'
            }
        };

        timeline.push(test_trial2_1);
        timeline.push(test_trial2_2);
    }

    //timeline.push(feedback);

    var y = getRandomInt(2);

    var training_video = [sc_label_first_training1[y].video];
    var training_img = [sc_label_first_training1[y].image1, sc_label_first_training1[y].image2];
	var training_audio = [sc_label_first_training1[y].audio];

    timeline.push(duck_audio);

    var training_trial = {
      type: 'video-audio-keyboard-response-mod',
      sources: training_video,
		stimulus: training_audio,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-first',
        order: '1-1'
      }
    }

    //timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2]
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'sc-label-first',
              order: '1-1'
            }
        };

        //timeline.push(test_trial1_1);
        //timeline.push(test_trial1_2);
    }

    //timeline.push(feedback);
  }
};

// creating nsc_label_first condition
var order1_1_nsc_label_first = function() {

  var feedback = {
    type: 'audio-keyboard-response',
    stimulus: 'audio/goodjob.m4a',
    prompt: "<img src='img/greatjob.png'/>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 2000,
    post_trial_gap: 1000
  }

  var shuffledArray = jsPsych.randomization.repeat(nsc_label_first_test_images1, 2);
  var shuffledArray2 = jsPsych.randomization.repeat(nsc_label_first_test_images2, 2);

  // deciding trial order
  var x = Math.random()

  if (x < 0.5) {

    var y = getRandomInt(2);

    var training_video = [nsc_label_first_training1[y].video];
    var training_img = [nsc_label_first_training1[y].image1, nsc_label_first_training1[y].image2];

    //timeline.push(duck_audio);

    var training_trial = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-first',
        order: '1-1'
      }
    }

    //timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2]
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'nsc-label-first',
              order: '1-1'
            }
        };

        //timeline.push(test_trial1_1);
        //timeline.push(test_trial1_2);

    }

    //timeline.push(feedback);

    var y = getRandomInt(2);

    var training_video = [nsc_label_first_training2[y].video];
    var training_img = [nsc_label_first_training2[y].image1, nsc_label_first_training2[y].image2];

    //timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-first',
        order: '1-1'
      }
    }

    //timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'nsc-label-first',
              order: '1-1'
            }
        };

        //timeline.push(test_trial2_1);
        //timeline.push(test_trial2_2);

    }

    //timeline.push(feedback);

  } else {

    var y = getRandomInt(2);

    var training_video = [nsc_label_first_training2[y].video];
    var training_img = [nsc_label_first_training2[y].image1, nsc_label_first_training2[y].image2];

    //timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-first',
        order: '1-1'
      }
    }

    //timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'nsc-label-first',
              order: '1-1'
            }
        };

        //timeline.push(test_trial2_1);
        //timeline.push(test_trial2_2);
    }

    //timeline.push(feedback);

    var y = getRandomInt(2);

    var training_video = [nsc_label_first_training1[y].video];
    var training_img = [nsc_label_first_training1[y].image1, nsc_label_first_training1[y].image2];

    //timeline.push(duck_audio);

    var training_trial = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-first',
        order: '1-1'
      }
    }

    //timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2]
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'nsc-label-first',
              order: '1-1'
            }
        };

        //timeline.push(test_trial1_1);
        //timeline.push(test_trial1_2);

    }

    //timeline.push(feedback);
  }
};

// creating sc_label_last condition
var order1_1_sc_label_last = function() {

  var feedback = {
    type: 'audio-keyboard-response',
    stimulus: 'audio/goodjob.m4a',
    prompt: "<img src='img/greatjob.png'/>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 2000,
    post_trial_gap: 1000
  }

  var shuffledArray = jsPsych.randomization.repeat(sc_label_last_test_images1, 2);
  var shuffledArray2 = jsPsych.randomization.repeat(sc_label_last_test_images2, 2);

  // deciding trial order
  var x = Math.random()

  if (x < 0.5) {

    var y = getRandomInt(2);

    var training_video = [sc_label_last_training1[y].video];
    var training_img = [sc_label_last_training1[y].image1, sc_label_last_training1[y].image2];

    //timeline.push(duck_audio);

    var training_trial = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2]
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'sc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial1_1);
        //timeline.push(test_trial1_2);

    }

    //timeline.push(feedback);

    var y = getRandomInt(2);

    var training_video = [sc_label_last_training2[y].video];
    var training_img = [sc_label_last_training2[y].image1, sc_label_last_training2[y].image2];

    //timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'sc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial2_1);
        //timeline.push(test_trial2_2);

    }

    //timeline.push(feedback);

  } else {

    var y = getRandomInt(2);

    var training_video = [sc_label_last_training2[y].video];
    var training_img = [sc_label_last_training2[y].image1, sc_label_last_training2[y].image2];

    //timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'sc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial2_1);
        //timeline.push(test_trial2_2);

    }

    //timeline.push(feedback);

    var y = getRandomInt(2);

    var training_video = [sc_label_last_training1[y].video];
    var training_img = [sc_label_last_training1[y].image1, sc_label_last_training1[y].image2];

    //timeline.push(duck_audio);

    var training_trial = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'sc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2]
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'sc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial1_1);
        //timeline.push(test_trial1_2);

    }

    //timeline.push(feedback);

  }
};

// creating nsc_label_last condition
var order1_1_nsc_label_last = function() {

  var feedback = {
    type: 'audio-keyboard-response',
    stimulus: 'audio/goodjob.m4a',
    prompt: "<img src='img/greatjob.png'/>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 2000,
    post_trial_gap: 1000
  }

  var shuffledArray = jsPsych.randomization.repeat(nsc_label_last_test_images1, 2);
  var shuffledArray2 = jsPsych.randomization.repeat(nsc_label_last_test_images2, 2);

  // deciding trial order
  var x = Math.random()

  if (x < 0.5) {

    var y = getRandomInt(2);

    var training_video = [nsc_label_last_training1[y].video];
    var training_img = [nsc_label_last_training1[y].image1, nsc_label_last_training1[y].image2];

    //timeline.push(duck_audio);

    var training_trial = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2]
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'nsc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial1_1);
        //timeline.push(test_trial1_2);

    }

    //timeline.push(feedback);

    var y = getRandomInt(2);

    var training_video = [nsc_label_last_training2[y].video];
    var training_img = [nsc_label_last_training2[y].image1, nsc_label_last_training2[y].image2];

    //timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'nsc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial2_1);
        //timeline.push(test_trial2_2);

    }

    //timeline.push(feedback);

  } else {

    var y = getRandomInt(2);

    var training_video = [nsc_label_last_training2[y].video];
    var training_img = [nsc_label_last_training2[y].image1, nsc_label_last_training2[y].image2];

    //timeline.push(duck_audio);

    var training_trial2 = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial2)

    for (i = 0; i < shuffledArray2.length; i++) {

      var test_audio2 = [shuffledArray2[i].audio];
      var test_stimuli2 = [shuffledArray2[i].image1, shuffledArray2[i].image2]
      var shuffled_test_stimuli2 = jsPsych.randomization.shuffle(test_stimuli2, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio2, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial2_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio2,
        prompt: shuffled_test_stimuli2[0]+shuffled_test_stimuli2[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial2_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli2[0],
            shuffled_test_stimuli2[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli2[0],
              button1: shuffled_test_stimuli2[1],
              condition: 'nsc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial2_1);
        //timeline.push(test_trial2_2);
    }

    var y = getRandomInt(2);

    var training_video = [nsc_label_last_training1[y].video];
    var training_img = [nsc_label_last_training1[y].image1, nsc_label_last_training1[y].image2];

    //timeline.push(duck_audio);

    var training_trial = {
      type: 'video-keyboard-response-mod',
      sources: training_video,
      width: '40%',
      prompt1: "<img width = '30%' src='"+training_img[0]+"'/>",
      prompt2: "<img width = '30%' src='"+training_img[1]+"'/>",
      choices: jsPsych.ALL_KEYS,
      trial_ends_after_video: true,
      post_trial_gap: 2000,
      data: {
        condition: 'nsc-label-last',
        order: '1-1'
      }
    }

    //timeline.push(training_trial)

    for (i = 0; i < shuffledArray.length; i++) {

      var test_audio = [shuffledArray[i].audio];
      var test_stimuli1 = [shuffledArray[i].image1, shuffledArray[i].image2]
      var shuffled_test_stimuli1 = jsPsych.randomization.shuffle(test_stimuli1, 1);

      var preload_audio = {
			type: "call-function",
			async: true,
			func: function(done) {
				jsPsych.getDisplayElement().innerHTML = '<p>Loading</p>'
				jsPsych.pluginAPI.preloadAudioFiles(test_audio, function() {
					done({ preload: "success" });
				})
			}
		};

		  //timeline.push(preload_audio);

      var test_trial1_1 = {
        type: 'audio-keyboard-response',
        stimulus: test_audio,
        prompt: shuffled_test_stimuli1[0]+shuffled_test_stimuli1[1],
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio: true,
      };

      var test_trial1_2 = {
          type: 'html-button-response',
          stimulus: "",
          choices: ['image1', 'image2'],
          button_html: [
            shuffled_test_stimuli1[0],
            shuffled_test_stimuli1[1]
          ],
          post_trial_gap: 1500,
          data: {
              button0: shuffled_test_stimuli1[0],
              button1: shuffled_test_stimuli1[1],
              condition: 'nsc-label-last',
              order: '1-1'
            }
        };

        //timeline.push(test_trial1_1);
        //timeline.push(test_trial1_2);

    }

    //timeline.push(feedback);

  }
};
