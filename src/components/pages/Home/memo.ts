  // useEffect(() => {
  //   gsap.set(refLightCursor.current, { xPercent: -50, yPercent: -50 });

  //   const moveMouse = (e: MouseEvent) => {
  //     gsap.to(refLightCursor.current, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 0.3,
  //     });
  //   };

  //   window.addEventListener("mousemove", moveMouse);

  //   return () => {
  //     window.removeEventListener("mousemove", moveMouse);
  //   };
  // }, []);

  

const FadeInLight = () => {
  let count: number = 0;
  const arry = new Set<HTMLElement>();

  const aaa = (
    el: Set<HTMLElement>,
    argElemnt: HTMLElement
  ): { centerX: number; centerY: number } | undefined => {
    const foundElement: HTMLElement | undefined = Array.from(el).find(
      (element: HTMLElement) => element === argElemnt
    );
    if (foundElement !== undefined) {
      const rect = foundElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      return { centerX, centerY };
    }
  };
  const FadeInText = (
    event: MouseEvent,
    element: HTMLElement,
    cursor: HTMLElement
  ) => {
    const mainText = refTextMain.current;


    const tl = gsap.timeline({ repeat: 0 });
    if (count === 0 && arry.size === 0) {
      count++;
      arry.add(element);
      let result = aaa(arry, element);
      if (result !== undefined) {
        const { centerX, centerY } = result;
        gsap.to(cursor, {
          x: centerX - 100,
          y: centerY - 100,
        });
        tl.to(element, {
          opacity: 1,
          scale: 2,
        });
        tl.to(element, {
          opacity: 0,
        });
        event.stopPropagation();
      } else if (count === 1) {
        arry.add(element);
        result = aaa(arry, element);
        if (arry.size === 2) {
          if (result !== undefined) {
            const { centerX, centerY } = result;
            count++;
            gsap.to(cursor, {
              x: centerX - 100,
              y: centerY - 100,
            });
            
            tl.to(element, {
              opacity: 1,
              scale: 3,
            });
            tl.to(element, {
              opacity: 0,
            });
          }
          event.stopPropagation();
        } else if (count === 2) {
          arry.add(element);
          result = aaa(arry, element);
          if (arry.size === 3) {
            if (result !== undefined) {
              const { centerX, centerY } = result;
              count++;
              gsap.to(cursor, {
                x: centerX - 100,
                y: centerY - 100,
              });
              
              tl.to(element, {
                opacity: 1,
                scale: 4,
              });
              tl.to(element, {
                opacity: 0,
              });
              tl.to(mainText, {
                delay: 3,
                duration: 5,
                opacity: 1,
                scale: 10,
                onStart: () => {
                  void playSound();
                },
              });
              event.stopPropagation();
            }
          }
        }
      }
    }

    // event.stopPropagation();
  };
  return FadeInText;
};



const fadeIn = FadeInLight();

const moveEvent = (
  e: MouseEvent,
  element: HTMLElement,
  cursor: HTMLElement
) => {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  gsap.to(cursor, {
    x: centerX - 100,
    y: centerY - 100,
  });
  e.stopPropagation();
};


// //ポインタロック開始
// function ElementRequestPointerLock(element:HTMLElement) {
//   const list: string[] = [
//     "requestPointerLock",
//     "webkitRequestPointerLock",
//     "mozRequestPointerLock",
//   ];
//   let i;
//   const num = list.length;
//   for (i = 0; i < num; i++) {
//     if (element[list[i]]) {
//       element[list[i]]();
//       return true;
//     }
//   }
//   return false;
// }

// //ポインタロック終了
// function DocumentExitPointerLock(document_obj): boolean {
//   const list: string[] = [
//     "exitPointerLock",
//     "webkitExitPointerLock",
//     "mozExitPointerLock",
//   ];
//   let i;
//   const num = list.length;
//   for (i = 0; i < num; i++) {
//     if (document_obj[list[i]]) {
//       document_obj[list[i]]();
//       return true;
//     }
//   }
//   return false;
// }

// el.onmouseenter = function (e) {
//   ElementRequestPointerLock(el);
//   setTimeout(() => {
//     DocumentExitPointerLock(document);
//   }, 5000);
// };

//特定の要素に近づいたらカーソルをゆっくりもしくは止める
// var mouseX = 0, mouseY = 0;
// document.addEventListener("mousemove", function(event) {
//   mouseX = event.clientX;
//   mouseY = event.clientY;
// });

// var targetElement = document.getElementById("target");
// var threshold = 100;

// function animateCursor() {
//   var boundingRect = targetElement.getBoundingClientRect();
//   var distance = Math.sqrt(
//     Math.pow(mouseX - boundingRect.left - boundingRect.width / 2, 2) +
//     Math.pow(mouseY - boundingRect.top - boundingRect.height / 2, 2)
//   );
//   if (distance < threshold) {
//     var scale = 1 - distance / threshold;
//     targetElement.style.transform = "scale(" + scale + ")";
//   } else {
//     targetElement.style.transform = "scale(1)";
//   }
//   requestAnimationFrame(animateCursor);
// }
// animateCursor();

// useEffect(() => {
//   playSound();
// }, []);
// const musicPlay = async () => {
//   const audio = new Audio("../../../../public/music/waraiufufu.wav");
//   await audio.play();
// };

// const sound: Howl = new Howl({
//   src: ["../../../../public/music/waraiufufu.wav"],
// });

// function handleMouseOver() {
//   audioRef.current.play();
//   console.log("music");
// }

// // const targetElement = document.getElementById("targetElement");
// const slowdownThreshold = 100;

// function getTargetElementCenter(targetElement: HTMLElement) {
//   const rect = targetElement.getBoundingClientRect();
//   return {
//     x: rect.left + rect.width / 2,
//     y: rect.top + rect.height / 2,
//   };
// }

// function getDistanceBetweenPoints(
//   x1: number,
//   y1: number,
//   x2: number,
//   y2: number
// ) {
//   return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }

// const move = (
//   event: MouseEvent,
//   callback: (targetElement: HTMLElement) => { x: number; y: number },
//   callback2: (x1: number, y1: number, x2: number, y2: number) => number,
//   elemnt: HTMLElement
// ) => {
//   const customCursor = refLightCursor.current;
//   const { clientX, clientY } = event;
//   const { x: centerX, y: centerY } = callback(elemnt);
//   console.log(elemnt.getBoundingClientRect());
//   const distance = callback2(clientX, clientY, centerX, centerY);

//   if (distance < slowdownThreshold) {
//     const slowdownFactor = distance / slowdownThreshold;
//     const cursorX = centerX + slowdownFactor * (clientX - centerX);
//     const cursorY = centerY + slowdownFactor * (clientY - centerY);
//     gsap.to(customCursor, {
//       x: cursorX - customCursor.offsetWidth / 2,
//       y: cursorY - customCursor.offsetHeight / 2,
//       duration: 0.3,
//     });
//   } else {
//     gsap.to(customCursor, {
//       x: clientX - customCursor.offsetWidth / 2,
//       y: clientY - customCursor.offsetHeight / 2,
//       duration: 0.3,
//     });
//   }
// };