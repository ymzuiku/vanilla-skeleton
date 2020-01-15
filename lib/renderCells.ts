import { setStyle, IStyle } from './setStyle';
import { IOptions, ICellType } from './interface';

/** 创建一个 cell 类型对象 */
export const cell = (value: ICellType) => value;

export const renderCells = (options: IOptions) => {
  let {
    cells,
    cellStyle,
    space = '4px',
    useAnimeTypes = { title: true, info: true, image: true },
    gradientAnimeColor,
    gradientAnimeTime = 3,
    opacityAnime,
    opacityAnimeTime = 2,
    eleStyle = {
      background: '#e8e8e8',
    },
  } = options;

  const defRadius = '4px';
  const section = document.createElement('section');

  if (!cells) {
    cells = [{ layout: 'title-info', style: { height: '50px' } }];
  }

  let backgroundStyle: IStyle;

  if (gradientAnimeColor) {
    backgroundStyle = {
      animation: `skeletonGb ${gradientAnimeTime}s infinite linear`,
      ...eleStyle,
      backgroundPosition: '0% 0',
      background: `linear-gradient(90deg,  ${eleStyle.background} 0%, ${eleStyle.background} 30%, ${gradientAnimeColor} 40%, ${eleStyle.background} 50%, ${eleStyle.background} 100%)`,
      backgroundSize: '300% 100%',
    };
  } else if (opacityAnime) {
    backgroundStyle = {
      animation: `skeletonOpa ${opacityAnimeTime}s infinite linear`,
      opacity: 1,
      ...eleStyle,
    };
  }

  cells.forEach(cell => {
    const box = document.createElement('section');
    const layoutString = cell.layout.replace(/ /g, '');
    let height = (cell.style && cell.style.height) || '1px';

    const layout = layoutString.split(',');

    layout.forEach((hor, i) => {
      const cellEel = document.createElement('div');
      setStyle({
        marginRight: i < layout.length - 1 ? space : undefined,
        flex: hor.indexOf('image') > -1 || hor.indexOf('empty') > -1 ? undefined : 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      })(cellEel);
      const verTypes = hor.split('-');
      verTypes.forEach((kind, j) => {
        const delay = i * 0.5 + 's';
        const marginRight = i < layout.length - 1 ? space : undefined;
        const marginBottom = j < verTypes.length - 1 ? space : undefined;
        if (kind === 'empty') {
          const el = document.createElement('div');
          setStyle({
            marginBottom,
            marginRight,
            width: height,
            height: height,
            ...cell.emptyStyle,
          })(el);
          cellEel.appendChild(el);
        } else if (kind === 'image') {
          const el = document.createElement('div');
          setStyle({
            animationDelay: delay,
            marginBottom,
            marginRight,
            ...eleStyle,
            ...(useAnimeTypes.image ? backgroundStyle : {}),
            borderRadius: '150px',
            width: height,
            height: height,
            ...cell.imageStyle,
          })(el);
          cellEel.appendChild(el);
        } else if (kind === 'title') {
          const el = document.createElement('div');
          setStyle({
            animationDelay: delay,
            borderRadius: defRadius,
            marginBottom,
            marginRight,
            height: '40px',
            ...eleStyle,
            ...cell.titleStyle,
            ...(useAnimeTypes.title ? backgroundStyle : {}),
          })(el);
          cellEel.appendChild(el);
        } else if (kind.indexOf('info') > -1) {
          const el = document.createElement('div');
          const len = Number(kind.replace('info', '')) || 3;

          for (let k = 0; k < len; k++) {
            const span = document.createElement('span');
            const flex = Math.floor(Math.random() * 10);

            setStyle({
              borderRadius: defRadius,
              marginRight: k < len - 1 ? space : undefined,
              flex: flex < 3 ? 3 : flex,
              height: '100%',
              ...eleStyle,
              ...(useAnimeTypes.info ? backgroundStyle : {}),
            })(span);
            el.appendChild(span);
          }
          setStyle({
            animationDelay: delay,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: defRadius,
            marginBottom,
            marginRight,
            height: '20px',
            ...cell.infoStyle,
          })(el);
          cellEel.appendChild(el);
        }
      });
      box.appendChild(cellEel);
    });

    setStyle({
      height,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...cellStyle,
      ...cell.style,
    })(box);

    section.appendChild(box);
  });

  return section;
};
