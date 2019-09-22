const canvas = document.querySelector("#face");
const context = canvas.getContext("2d");

function bezier(template) {
  context.beginPath();
  context.moveTo(template[0].x, template[0].y);
  context.bezierCurveTo(
    template[1].x,
    template[1].y,
    template[2].x,
    template[2].y,
    template[3].x,
    template[3].y
  );
  context.stroke();
}

const underlip = [
  {
    x: 30,
    y: 240
  },
  {
    x: 30,
    y: 290
  },
  {
    x: 270,
    y: 290
  },
  {
    x: 270,
    y: 240
  }
];

bezier(underlip);

const upperLip = [
  {
    x: 30,
    y: 240
  },
  {
    x: 30,
    y: 190
  },
  {
    x: 270,
    y: 190
  },
  {
    x: 270,
    y: 240
  }
];

bezier(upperLip);

const leftEyeUpper = [
  {
    x: 50,
    y: 100
  },
  {
    x: 50,
    y: 140
  },
  {
    x: 130,
    y: 140
  },
  {
    x: 130,
    y: 100
  }
];

bezier(leftEyeUpper);

const leftEyeLower = [
  {
    x: 50,
    y: 100
  },
  {
    x: 50,
    y: 60
  },
  {
    x: 130,
    y: 60
  },
  {
    x: 130,
    y: 100
  }
];

bezier(leftEyeLower);

const rightEyeLower = [
  {
    x: 250,
    y: 100
  },
  {
    x: 250,
    y: 140
  },
  {
    x: 170,
    y: 140
  },
  {
    x: 170,
    y: 100
  }
];

bezier(rightEyeLower);

const rightEyeUpper = [
  {
    x: 250,
    y: 100
  },
  {
    x: 250,
    y: 60
  },
  {
    x: 170,
    y: 60
  },
  {
    x: 170,
    y: 100
  }
];

bezier(rightEyeUpper);

const noseLeft = [
  {
    x: 150,
    y: 100
  },
  {
    x: 120,
    y: 160
  },
  {
    x: 120,
    y: 170
  },
  {
    x: 150,
    y: 180
  }
];

bezier(noseLeft);
