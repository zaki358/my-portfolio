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