
function getBackground(type) {
  let types = [
    "./types_imgs/normal.png",
    "./types_imgs/fighting.png",
    "./types_imgs/flying.png",
    "./types_imgs/poison.png",
    "./types_imgs/ground.png",
    "./types_imgs/rock.png",
    "./types_imgs/bug.png",
    "./types_imgs/ghost.png",
    "./types_imgs/steel.png",
    "./types_imgs/fire.png",
    "./types_imgs/water.png",
    "./types_imgs/grass.png",
    "./types_imgs/electric.png",
    "./types_imgs/psychic.png",
    "./types_imgs/ice",
    "./types_imgs/dragon.png",
    "./types_imgs/dark.png",
    "./types_imgs/fairy.png"
  ];
 
  return types[type-1];


}

export default getBackground;
