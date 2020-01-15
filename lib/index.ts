import { setStyle } from './setStyle';
import { IOptions } from './interface';
import { renderCells, cell } from './renderCells';
import { renderHeader } from './renderHeader';
import { renderBottom } from './renderBottom';

const keyFrame = document.createElement('style');
keyFrame.id = 'skeletonKeyframes';
keyFrame.textContent = `
@keyframes skeletonGb {
  0% { background-position: 100% 0;}
  100% { background-position: 0% 0;}
}
@keyframes skeletonOpa {
  0% { opacity: 1;}
  50% { opacity: ${0.62};}
  100% {opacity: 1;}
}
.skeleton-safe-top {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.skeleton-safe-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
`;
document.head.appendChild(keyFrame);

const render = (options: IOptions) => {
  const view = document.createElement('div');
  view.id = options.id || 'skeletion-base';

  let { onClose, ref, style = {} } = options;

  if (onClose) {
    (view as any).onClose = onClose;
  }

  // 渲染header
  const header = renderHeader(options);
  if (header) {
    view.appendChild(header);
  }

  // 渲染cells
  const cells = renderCells(options);
  if (cells) {
    view.appendChild(cells);
  }

  // 渲染底部
  const bottom = renderBottom(options);
  if (bottom) {
    view.appendChild(bottom);
  }

  setStyle({
    padding: '0px',
    margin: '0px',
    width: '100vw',
    height: '100vh',
    zIndex: '9999',
    position: 'fixed',
    left: '0px',
    top: '0px',
    overflow: 'auto',
    background: '#fff',
    ...style,
  })(view);

  if (ref) {
    ref(view);
  }

  return view;
};

const close = (id = 'skeletion-base') => {
  setTimeout(()=>{
    const view = document.getElementById(id);
  if (view) {
    if ((view as any).onClose) {
      (view as any).onClose();
      (view as any).onClose = undefined;
    }
    if (view.parentNode) {
      view.parentNode.removeChild(view);
    }
  }
  }, 20);
};

const vSkeleton = {
  render,
  close,
  cell,
};

export { vSkeleton };

(window as any).vSkeleton = vSkeleton;
