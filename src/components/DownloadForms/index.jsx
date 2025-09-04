const DownloadForms = ({ forms }) => {
  return (
    <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full rounded-2xl border-2 font-lexend border-secondary/15 bg-transparent">
        <div className="w-full flex flex-col gap-4 lg:gap-8 p-6 lg:p-12">
          <h3 className="inline-block tracking-tighter text-balance text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-lbr from-primary from-0% to-secondary to-70%">
            Download Forms
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
            {forms.map((form, idx) => (
              <a
                key={idx}
                href={form.href}
                download
                className="hover:opacity-70 transition"
              >
                <img
                  src={form.imgSrc}
                  alt={form.alt}
                  className="w-full"
                  width={form.width}
                  height={form.height}
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col gap-1 mt-4">
                  <h6 className="inline-block tracking-tighter text-balance text-md lg:text-lg leading-tight font-semibold text-gray/80">
                    {form.title}
                  </h6>
                  <span className="text-sm text-secondary/70">{form.subtitle}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadForms;