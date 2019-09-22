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
    y: 200
  },
  {
    x: 30,
    y: 250
  },
  {
    x: 270,
    y: 250
  },
  {
    x: 270,
    y: 200
  }
];

bezier(underlip);

const upperLip = [
  {
    x: 30,
    y: 200
  },
  {
    x: 30,
    y: 150
  },
  {
    x: 270,
    y: 150
  },
  {
    x: 270,
    y: 200
  }
];

bezier(upperLip);

const leftEyeUpper = [
  {
    x: 30,
    y: 50
  },
  {
    x: 50,
    y: 100
  },
  {
    x: 80,
    y: 100
  },
  {
    x: 100,
    y: 50
  }
];

bezier(leftEyeUpper);

const leftEyeLower = [
  {
    x: 30,
    y: 50
  },
  {
    x: 50,
    y: 0
  },
  {
    x: 80,
    y: 0
  },
  {
    x: 100,
    y: 50
  }
];

bezier(leftEyeLower);

const rightEyeUpper = [
  {
    x: 270,
    y: 50
  },
  {
    x: 270,
    y: 100
  },
  {
    x: 200,
    y: 100
  },
  {
    x: 200,
    y: 50
  }
];

bezier(rightEyeUpper);

const rightEyeLower = [
  {
    x: 270,
    y: 50
  },
  {
    x: 270,
    y: 0
  },
  {
    x: 200,
    y: 0
  },
  {
    x: 200,
    y: 50
  }
];

bezier(rightEyeLower);

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
