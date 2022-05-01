const calcBrowserScrollWidth = () => {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll'; // for add browser scroll standard
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth; // size with scroll - size without scroll
    div.remove();

    return scrollWidth;
}



// body without scroll: body margin stub, header padding stub
export const toggleBodyScroll = (mode: BodyScrollModeType) => {
    const browserScrollWidth = calcBrowserScrollWidth();

    const bodyOverflow = mode === 'show' ? 'unset' : 'hidden';
    const stubWidth = mode === 'show' ? '0' : `${browserScrollWidth}px`;

    document.body.style.overflow = bodyOverflow;
    document.body.style.marginRight = stubWidth;
    document.querySelector<HTMLElement>('header.header')!.style.paddingRight = stubWidth;
}

type BodyScrollModeType = 'show' | 'hide'