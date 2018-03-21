      
      var colors = [
        'rgb(249,14,27)',
        'rgb(250,40,251)',
        'rgb(11,36,250)',
        'rgb(45,254,254)',
        'rgb(254,253,56)',
        'rgb(41,251,47)'
      ];
      
      // should I do a 'joker' color scheme?
      
      var elem = document.getElementById('7');
      var params = { width: window.innerWidth, height: window.innerHeight };
      var two = new Two(params).appendTo(elem);

      var mid = {x: two.width / 2, y: two.height / 2};
      var width = two.width;
      var height = two.height;
      
      $(elem).click(function() {
        map();        
        scatter();
        console.log("clicked");
      });
      
      
      // make this mobile responsive
      var small_base_w = 250;
      var big_base_w = small_base_w * 1.79;
      
      var smalls = [];
      var bigs = [];
      
      var v_shift_small;
      var h_shift_small;
      var d_shift_small;
      var v_shift_big;
      var h_shift_big;
      var d_shift_big;
      
      for (i = 0; i<3; i++) {
        var big = two.makeRectangle(mid.x, mid.y, big_base_w, big_base_w);
        big.stroke = "rgb(254, 255,255)";
        big.linewidth = Math.pow(i, 0.75) + 1;
//        big.noStroke();
        big.noFill();
//        big.fill = colors[i + 3];
//        big.opacity = 0.6;
        bigs.push(big);
      }
      
//      var base1 = two.makeRectangle(mid.x, mid.y, big_base_w, big_base_w);
//      base1.noStroke();
      
      for (i = 0; i<3; i++) {
        var small = two.makeRectangle(mid.x, mid.y, small_base_w, small_base_w);
        small.stroke = "rgb(254, 255,255)";
        small.linewidth = Math.pow(i, 1.3) + 0.75;
//        small.noStroke();
        small.noFill();
//        small.fill = colors[i];
//        small.opacity = 0.6;
        smalls.push(small);
      }
      
//      var base2 = two.makeRectangle(mid.x, mid.y, small_base_w, small_base_w);
//      base2.fill = "#111111";
//      base2.noStroke();
      
//      var f = two.makeRectangle(mid.x, mid.y, small_base_w, small_base_w);
//      var s = two.makeRectangle(mid.x, mid.y, big_base_w, big_base_w);
//      f.stroke = 'yellow';
//      s.stroke = 'yellow';
//      f.noFill();
//      s.noFill();
      
      two.update();
      
      // Generate random coordinates
      function map() {

        if (Math.random() < 0.5) {
          v_shift_small = small_base_w * 0.1;
          v_shift_big = big_base_w * 0.06;
        } else {
          v_shift_small = small_base_w * -0.1;
          v_shift_big = big_base_w * -0.06;
        }
        
        if (Math.random() < 0.5) {
          h_shift_small = v_shift_small * 4/3;
          h_shift_big = v_shift_big * 4/5;
        } else {
          h_shift_small = v_shift_small * -4/3;
          h_shift_big = v_shift_big * -4/5;
        }
        
        d_shift_small = {x: 2/3 * v_shift_small * -1, y: v_shift_small * -1};
        d_shift_big = {x: h_shift_big * -1, y: v_shift_big * -1};
        
      }
      
      // move each square to those coordinates
      function scatter() {
        
        var small_tween_0 = new TWEEN.Tween(smalls[0].translation)
                               .to({x: mid.x + h_shift_small}, 200)                               
                               .easing(TWEEN.Easing.Exponential.Out)
                               .start();
        
        var small_tween_1 = new TWEEN.Tween(smalls[1].translation)
                               .to({y: mid.y + v_shift_small}, 200)
                               .easing(TWEEN.Easing.Exponential.Out)
                               .start();
        
        var small_tween_2 = new TWEEN.Tween(smalls[2].translation)
                               .to({x: mid.x + d_shift_small.x, y: mid.y + d_shift_small.y}, 201)
                               .easing(TWEEN.Easing.Exponential.Out)
                               .start();
        
         var big_tween_0 = new TWEEN.Tween(bigs[0].translation)
                               .to({x: mid.x + h_shift_big}, 200)                               
                               .easing(TWEEN.Easing.Exponential.Out)
                               .start();
        
        var big_tween_1 = new TWEEN.Tween(bigs[1].translation)
                               .to({y: mid.y + v_shift_big}, 200)
                               .easing(TWEEN.Easing.Exponential.Out)
                               .start();
        
        var big_tween_2 = new TWEEN.Tween(bigs[2].translation)
                               .to({x: mid.x + d_shift_big.x, y: mid.y + d_shift_big.y}, 201)
                               .easing(TWEEN.Easing.Exponential.Out)
                               .start();
        
        small_tween_2.onComplete(function () {
          TWEEN.removeAll();
        });
        
        animate();
        

        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
            two.update();
        }  
      }
      
      