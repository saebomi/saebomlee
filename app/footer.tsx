import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 footer">
      <div className="bottom flex flex-col justify-end h-[100vh]">
        <div className="info flex">
          <div className="info__left">
            <p className="">
              <Link href="mailto:lsbbom@gmail.com" target="_blank">
                lsbbom@gmail.com
              </Link>
            </p>
            <p className="">+82 10 99723551</p>
            <p className="">+1 (929)2827397</p>
          </div>
          <div className="info__right">
            <p className="">
              <Link href="" target="_blank">Linkedin</Link>
            </p>
            <p className="">
              <Link href="" target="_blank">Resume</Link>
            </p>
          </div>
          
        </div>
        <h1 className="text-[16vw] font-black leading-none tracking-tighter uppercase">
            SAEBOM:LEE
          </h1>
        <div>© 2026 SAEBOMLEE</div>
      </div>
    </footer>
  );
}