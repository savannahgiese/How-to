function create(){
    var bg1, bg2, draw, cloud1_path, cloud1, cloud2_path, cloud2, cloud3_path, cloud3, night, day, sun_path, sun, moon_path, moon, raindrop_path, raindrop, star_path, star;
    draw = SVG('background').size(636, 500);
    bg1 = 'm199.06,153.31499l64.00183,0l0,0c35.34714,0 64.00183,116.62401 64.00183,260.50002c0,143.87598 -28.65469,260.5 -64.00183,260.5l-64.00183,0z';
    draw.path(bg1).fill('#aaffaa').stroke({'stroke-width': 5, color: '#3f7f00'}).rotate(-90).translate(-2,20);
    bg2 = 'm284.98541,124.35695l36.09412,0l0,0c19.93423,0 36.0936,142.12117 36.0936,317.42839c0,175.30933 -16.15936,317.42828 -36.0936,317.42828l-36.09412,0l0,-634.85667z';
    draw.path(bg2).fill('#aaffaa').stroke({'stroke-width': 5, color: '#3f7f00'}).rotate(-90).translate(-3,22);
    
    cloud1_path = 'm81.908203,50.853199c0,5.6479 -10.768402,19.291798 -1.372505,20.150898c-0.420601,0.611099 -0.7481,1.214005 -0.7481,1.854904c0,5.9907 19.235405,10.877396 42.940399,10.877396c23.70401,0 42.939011,-4.886696 42.939011,-10.877396c0,-0.405701 -0.294006,-0.763702 -0.464005,-1.154701c1.039001,0.2201 2.065994,0.455101 3.205994,0.455101c6.339996,0 77.998978,0.979469 41.499008,-6.204201c-36.499969,-7.18367 -43.999939,-27.367336 -71.499893,-28.551003c-27.499977,-1.183666 -28.999947,14.632668 -56.499908,13.449001z';
    cloud1 = draw.path(cloud1_path).stroke({'stroke-width': 5, color: '#bfbfbf'}).center(100,100).fill('white');
   
    cloud2_path = 'm327.540222,99.772827c-1.866302,-0.890167 -25.924255,-6.427399 -28.123779,-6.427399c-2.199524,0 -24.17572,-5.437103 -25.886658,0.756836c-19.805054,-2.581207 -17.621582,13.494812 -17.621582,19.750946c0,5.647919 7.231598,10.291809 16.627472,11.150848c-0.420563,0.611176 -1.748047,2.214081 -0.748047,1.85498c1,-0.3591 85.585175,-0.763733 85.41568,-1.154724c1.039001,0.220062 2.065674,0.455048 3.205566,0.455048c1.139893,0 11.499268,-3.677734 11.499268,-8.204193c0,-4.524963 -5.159607,-8.203339 -11.499268,-8.203339c-0.778809,0 -1.437927,0.22821 -2.173645,0.334198c0.069214,-7.585175 7.360229,-21.345856 -18.343933,-14.345856l-12.351074,4.032654z';
    cloud2 = draw.path(cloud2_path).stroke({'stroke-width': 5, color: '#bfbfbf'}).center(400,250).fill('white');

    cloud3_path = 'm422.535675,71.004059c-0.420563,0.611176 -0.748047,1.214081 -0.748047,1.85498c0,0.6409 19.235413,10.87735 42.940643,10.87735c23.703522,0 42.939026,-4.886719 42.939026,-10.87735c0,-0.405701 -0.294495,-0.763733 -0.463989,-1.154724c1.039001,0.220062 2.065674,0.455048 3.205566,0.455048c6.339661,0 11.499268,-3.677734 11.499268,-8.204193c0,-4.524963 -5.159607,-8.203339 -11.499268,-8.203339c-1.531433,-3.474274 -68.813416,-9.011658 -70.517578,8.988342l-17.355621,6.263885z';
    cloud3 = draw.path(cloud3_path).stroke({'stroke-width': 5, color: '#bfbfbf'}).center(500,150).fill('white');

    var clouds = draw.group();
    clouds.add(cloud1).add(cloud2).add(cloud3);
    clouds.move(620,0);
    var cloud4 = draw.path(cloud3_path).size(50).stroke({'stroke-width': 5, color: '#bfbfbf'}).center(150,150).fill('white');
    var cloud5 = draw.path(cloud1_path).size(55).stroke({'stroke-width': 5, color: '#bfbfbf'}).center(50,200).fill('white');
    var cloud6 = draw.path(cloud2_path).size(70).stroke({'stroke-width': 5, color: '#bfbfbf'}).center(600,200).fill('white');
    clouds.add(cloud4).add(cloud5).add(cloud6);
    
    sun_path = 'm366.406865, 435.33l-17.150208,5.738037l0,-11.476074l17.150208,5.738037zm-12.450104,-28.288452l-7.812683,15.478607l-8.623566,-8.11731l16.436249,-7.361298zm-30.058716,-11.709564l6.106934,16.141266l-12.213135,0l6.106201,-16.141266zm-30.055359,11.709564l16.454285,7.361298l-8.623718,8.11731l-7.830566,-15.478607zm-12.432129,28.288452l17.15033,-5.738037l0,11.476074l-17.15033,-5.738037zm12.432129,28.279572l7.830566,-15.469208l8.623718,8.11734l-16.454285,7.351868l0,0zm30.055359,11.718445l-6.106201,-16.141113l12.213135,0l-6.106934,16.141113zm30.058716,-11.718445l-16.436249,-7.351868l8.604645,-8.11734l7.831604,15.469208zm-51.311584,-28.279572l0,0c0,-11.046692 9.516602,-20.003479 21.252869,-20.003479c11.739716,0 21.256256,8.956787 21.256256,20.003479c0,11.037445 -9.516541,19.994415 -21.256256,19.994415c-11.736267,0 -21.252869,-8.95697 -21.252869,-19.994415l0,0z';
    moon_path = 'm342.40686,75.33l0,0c-20.20059,0 -36.57687,-15.89417 -36.57687,-35.5006c0,-19.60582 16.37628,-35.4994 36.57687,-35.4994l0,0c-11.51291,8.38037 -18.2883,21.53256 -18.2883,35.4994c0,13.96805 6.77539,27.12021 18.2883,35.5006z';
    sun = draw.path(sun_path).stroke({'stroke-width': 5, color: '#bfbf00'}).center(318,450).fill('#ffff00');
    moon = draw.path(moon_path).stroke({'stroke-width': 5, color: '#e5e5e5'}).center(318,50).fill('#bfbfbf');

    star_path = 'm601.3606,428.20651l0.40247,0l0.12421,-0.38223l0.12433,0.38223l0.4024,0l-0.32562,0.23621l0.12439,0.3822l-0.3255,-0.23621l-0.3255,0.23621l0.12439,-0.3822l-0.32556,-0.23621z';
    //star = draw.path(star_path).size(5).stroke({'stroke-width': 5, color: '#ffffaa'}).center(318,300).fill('#ffffaa');

    star_path = 'm601.3606,428.20651l0.40247,0l0.12421,-0.38223l0.12433,0.38223l0.4024,0l-0.32562,0.23621l0.12439,0.3822l-0.3255,-0.23621l-0.3255,0.23621l0.12439,-0.3822l-0.32556,-0.23621z';
    //start = draw.path(star_path).stroke({});
    
    clouds.back();
    var sunMoon = draw.group();
    sunMoon.add(sun).add(moon).back();

    var stars = draw.group().back();

    for (var i = 0; i < 200; i++){
        star = draw.path(star_path).stroke({'stroke-width': 5, color: '#FFFFE0'}).fill('#ffffaa').center(636*Math.random(), 500*Math.random()).size(Math.random()%5 + 2);
        stars.add(star);
    }

    night = draw.rect(636,500).fill('#000080').back();
    day = draw.rect(636,500).fill('a4ffff').back();
    
    var gradient = draw.gradient('linear', function(stop) {
        stop.at(0, '#FF0000');
        stop.at(1, '#a4ffff');
    });
    
    gradient.to(0, 0).from(0, 1);
    day.fill(gradient);

    function sunTime() {
        clouds.move(640,0);
        sunMoon.rotate(0,318,250);
        clouds.animate(6000).move(0,0);
        stars.animate(4000).opacity(0);
        night.animate(4000).opacity(0);
        day.animate(6000).opacity(0);
        sunMoon.animate(6000).rotate(180,318,250).after(moonTime);
    }
    function moonTime() {
        clouds.animate(6000).move(-640,0);
        stars.animate(6000).opacity(1);
        day.animate(6000).opacity(1);
        night.animate(3000, '=', 3000).opacity(1);
        sunMoon.animate(6000).rotate(360,318,250).after(sunTime);
    }

    function twinkle(){
        for (var i = 0; i < 50; i++){
            stars.get(i).animate(400).opacity('.5').loop();
        }
        for (var i = 50; i < 100; i++){
            stars.get(i).animate(600).opacity('.5').loop();
        }
        for (var i = 100; i < 150; i++){
            stars.get(i).animate(800).opacity('.5').loop();
        }
        for (var i = 150; i < 200; i++){
            stars.get(i).animate(1000).opacity('.5').loop();
        }
    }
    
    twinkle();
    sunTime();
}
