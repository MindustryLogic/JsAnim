import * as ManimJs from './JsAnim.js';

ManimJs.Add.initDisplay("1080x720", 30, true);
ManimJs.Add.DisplayData();
ManimJs.Add.CreateRectCSS(20, 50, "200x400", "blue", "yee");
ManimJs.Add.CreateRectSVG(50, 60, "100x80", "red", "hi");

ManimJs.Animate.Appear(0);
