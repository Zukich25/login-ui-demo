import Image from "next/image";

export default function Home() {
  return (
    <main className="login-page relative min-h-screen flex items-center justify-center p-5 sm:p-8">
      <div className="brand absolute left-5 top-5 flex items-center gap-2 sm:left-8 sm:top-8">
        <span className="inline-block h-3 w-3 rounded-full bg-[#5865f2]" />
        <p className="text-sm font-semibold tracking-wide text-white sm:text-base">PixelVerse UI Demo</p>
      </div>

      <section className="login-card w-full max-w-[784px] rounded-[6px] bg-[#313338] px-4 py-6 text-white shadow-2xl sm:px-8 sm:py-8">
        <p className="mb-4 text-center text-xs text-[#b5bac1]">
          Educational project only. This page does not collect or store credentials.
        </p>
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          <div className="w-full md:w-[60%]">
            <h1 className="mb-2 text-center text-[32px] font-bold leading-none">
              Welcome back!
            </h1>
            <p className="mb-5 text-center text-[16px] text-[#b5bac1]">
              We&apos;re so excited to see you again!
            </p>

            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.02em] text-[#b5bac1]">
              Email or Phone Number *
            </label>
            <input
              className="mb-4 h-10 w-full rounded-[4px] border border-[#3f4147] bg-[#1e1f22] px-3 text-[14px] text-[#f2f3f5] outline-none transition-colors focus:border-[#00a8fc]"
              autoComplete="username"
            />

            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.02em] text-[#b5bac1]">
              Password *
            </label>
            <input
              type="password"
              className="mb-2 h-10 w-full rounded-[4px] border border-[#3f4147] bg-[#1e1f22] px-3 text-[14px] text-[#f2f3f5] outline-none transition-colors focus:border-[#00a8fc]"
              autoComplete="current-password"
            />

            <p className="mb-4 cursor-pointer text-sm text-[#00a8fc] hover:underline">
              Forgot your demo password?
            </p>

            <button className="h-11 w-full rounded-[4px] bg-[#5865f2] text-[16px] font-medium transition hover:bg-[#4752c4] active:translate-y-[1px]">
              Continue (Demo)
            </button>

            <p className="mt-4 text-sm text-[#949ba4]">
              Need an account?{" "}
              <span className="cursor-pointer text-[#00a8fc] hover:underline">Register</span>
            </p>
          </div>

          <aside className="hidden w-[40%] items-center text-center md:flex md:flex-col md:justify-start md:pt-1">
            <div className="qr mb-4 h-44 w-44 rounded bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.12)]">
              <Image
                src="/qr.png"
                alt="Demo QR code"
                width={176}
                height={176}
                className="h-full w-full rounded-sm object-cover"
                priority
              />
            </div>
            <h2 className="mb-2 max-w-[220px] text-[18px] font-semibold leading-[1.15]">Sign in with QR</h2>
            <p className="max-w-[230px] text-[13px] leading-[1.35] text-[#b5bac1]">
              Scan with the PixelVerse demo app for a visual-only login flow.
            </p>
            <p className="mt-2 cursor-pointer text-[13px] text-[#00a8fc] hover:underline">
              Or use demo passkey
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}