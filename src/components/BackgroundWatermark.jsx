import watermarkLogo from '../assets/watermark logo.png';

function BackgroundWatermark() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[2.6rem]">
      <img
        alt=""
        className="absolute bottom-[-64px] right-[-88px] w-[360px] select-none opacity-[0.035] sm:bottom-[-72px] sm:right-[-96px] sm:w-[420px]"
        src={watermarkLogo}
      />
    </div>
  );
}

export default BackgroundWatermark;
