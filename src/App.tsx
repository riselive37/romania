/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  CheckCircle2, 
  Star, 
  Mail, 
  Ticket, 
  AlertCircle, 
  Building2, 
  Users, 
  ChevronDown, 
  Trophy, 
  Globe, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="flex items-center gap-4">
          <span className="font-noto-serif italic font-bold text-primary text-2xl tracking-tighter">JRMS</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-primary hover:text-secondary transition-colors font-noto-serif uppercase tracking-wider text-sm" href="#">About Us</a>
          <a className="text-primary hover:text-secondary transition-colors font-noto-serif uppercase tracking-wider text-sm" href="#">Activities</a>
          <a className="text-secondary font-bold border-b-2 border-secondary pb-1 font-noto-serif uppercase tracking-wider text-sm" href="#">Membership</a>
          <a className="text-primary hover:text-secondary transition-colors font-noto-serif uppercase tracking-wider text-sm" href="#">Donations</a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-manrope font-bold text-sm tracking-wide transition-transform active:scale-95">
          Join/Donate
        </button>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover brightness-[0.4]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlF67Tj3mqqJdBoGQctVxan87Oj36nHwsTCNTOGkQkavZ3PXY0dW-aaM59Mtnr4t5Kt4rB_znZKlD0dPk1A25rmiAD1MW7tChEYD4t581TdszFjMwiaN7iUWo_RH75E4uLBx5zyFWvW7Mw0JHQ2C7qyMmCGHlMXiNpEyKeh-31tiesILPc8PtCuN1nOniNZYA_jDTJ1lITnzHO6reCjFn5NbDYRelp2DqKP6JYIjcpEZ5FG8XYPVeWdaCnnCysoYs6OajI8eRvsg" 
              alt="Classical music concert"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-8"
            >
              <span className="text-secondary-fixed-dim font-manrope uppercase tracking-[0.2em] text-sm font-bold border-l-4 border-secondary pl-4">Cultural Bridge Project</span>
              <h1 className="text-white font-noto-serif text-5xl md:text-7xl leading-[1.1] font-bold">
                ルーマニアの響きを、<br/>次世代の希望へ。<br/>
                <span className="text-secondary-fixed">文化の架け橋に。</span>
              </h1>
              <p className="text-primary-fixed-dim text-xl md:text-2xl font-manrope font-light max-w-2xl leading-relaxed">
                月額1,000円から参加できる『マンスリー会員』制度、新設。あなたの支援が、音楽を通じた国際交流の未来を支えます。
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
                  入会を申し込む
                </button>
                <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                  詳しく見る
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-24 bg-surface embroidery-pattern">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mb-20">
              <label className="text-secondary font-manrope uppercase tracking-widest text-xs font-bold block mb-4">OUR MISSION</label>
              <h2 className="text-primary font-noto-serif text-4xl font-bold mb-8">歴史を紡ぎ、未来へ奏でる。</h2>
              <div className="space-y-6 text-on-surface/80 leading-relaxed text-lg font-manrope">
                <p>日本・ルーマニア音楽協会は、19世紀から続く両国の歴史的・文化的な絆を深めるために設立されました。音楽という万国共通の言語を通じて、若手演奏家の育成と文化交流の場を創出しています。</p>
                <p>私たちは、エネスコをはじめとするルーマニア音楽の普及、そして両国の才能ある若者たちが共にステージに立つ機会を提供することで、単なる音楽鑑賞に留まらない「心の外交」を実践しています。あなたの会員登録は、これらすべての活動の直接的な原動力となります。</p>
              </div>
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "国際音楽コンクール",
                  desc: "世界中から集まる卓越した才能を支援。ルーマニアと日本の新鋭音楽家が競い合い、成長する最高峰のステージを提供します。",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9RpTnvyzJoVh6Z_cGafCOxICiYeGm7BotK-ghk5MXHnf2SSSShXQZaVLA8GmMi4kEk52-DeekU4XebUhXMS0Bx-1fpp02qDr4YATQSv6MIonWFJ0xbfyAGWzvpK9JawfnZbiTMFymCit3Cafpy8vMl2YyE5HWlyYPoF0c_PaO5NwBX0J_cl_9POby9UmSqUcYmWvMeFmcynisFo4FrPuXDZe0CpRPlzGtGh5Cua1IIEjhY3O2zt8tSd3l5PnwCYSlCDlnlegcEXw"
                },
                {
                  title: "ジュニアコンクール",
                  desc: "次世代を担う子供たちの感性を育む場。技術だけでなく、異文化への理解と好奇心を育てるための登竜門として開催しています。",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfF8A8Oq7AdrYGJKAJ8XfNsXWuL9iAcFuyvW2D3AZGbajASj93CmlfO0UakpiVdpa330f5gL0m5vKQZIPcGGbFFhCC34YuZRHDXoAvWwjXaxc3P46I8d9fh-jl_1FK1gsmJepQd8PqQ-Y6yqlXHJZdvgBi0yX2SYzwPQW9u7J-e_UUDDCTnIVJod5CWdCgFNKaEwGvbPiB84x9okQrgoeckhCCIoGDDDtKkkb08zVHWw7u_kJQIIeqp4m3uYc79gI7W7Nrl0G28kw"
                },
                {
                  title: "交流演奏会",
                  desc: "両国の伝統楽曲を現代に蘇らせるコンサート。地域社会と連携し、クラシック音楽をより身近に感じられる機会を創出します。",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMODoV6RcL7O7-xi7z6NEP-sJ6YjfkGdSOaWoHBv56HKzQkq1RIseCG4PnilTWclOvmuw1G3pg1Y9VxWd-vzI0rKgJhuqhrwCH2KkTvF_4WM30E-amkpI_LlD9rWKEfx5g8iVGgH9r7grzVFq01H3l9u4VHVxhgunPC2MPTYWdu-jBFjfn9QAAp3Od9SUoSuAPAXLi0iKrFn8qJOMJs1aDFZ4m08YGcNho7FNci3BfrSYnfoLu_C_fpP9qHImaH3aPu0iNhvwpndk"
                },
                {
                  title: "大使館パーティー",
                  desc: "ルーマニア大使館協力のもと開催される特別な親睦会。会員限定で、食文化や歴史を直接体験できる貴重な社交の場です。",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXrp86YkXix1OhMhXLgPZh0UJnPGocl7GNkQjks2tBM45i-w3lRkawkx13dR45dzCnkDzaIrRRKVHj-YGlFUjiq077Lr_sOIGIcFtJ2-IkvLc6-xNq_1UkGXhIEcsmAp97P9A5ZdUQMec8Hvz5gmRjM-xbqSjsMpxNYYF9kFPqHhn7678eHaO5fEb2lrU7AGybPPaOug36joH4pOYPJENMjYccfY-rddrbQOE2gz_scMPg6M5zzn88bbvtvJXfoacpMmL5v5CnbyI"
                }
              ].map((activity, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src={activity.img} 
                      alt={activity.title}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-noto-serif text-xl text-primary font-bold mb-3">{activity.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{activity.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-24 bg-surface-container">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary font-noto-serif text-4xl font-bold mb-4">会員種別のご案内</h2>
              <p className="text-on-surface-variant font-manrope">ライフスタイルやご支援の形に合わせて、3つのプランをご用意しました。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Light Member */}
              <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col border border-outline-variant/20 hover:shadow-xl transition-shadow">
                <div className="mb-8">
                  <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant">Monthly</span>
                  <h3 className="text-2xl font-noto-serif font-bold text-primary mt-4">ライト会員</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold text-secondary">¥1,000</span>
                    <span className="text-on-surface-variant ml-1">/月</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-4 italic">"コーヒー1杯の応援が、文化を支える。"</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                    <span className="text-sm">デジタル会員証の発行</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                    <span className="text-sm">入会金不要（事務手数料 ¥0）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                    <span className="text-sm">オンライン会報の購読</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">Squareで決済する</button>
              </div>

              {/* Standard Member (Featured) */}
              <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col scale-105 shadow-2xl relative z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recommended</div>
                <div className="mb-8">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold">Annual</span>
                  <h3 className="text-2xl font-noto-serif font-bold mt-4">スタンダード会員</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold text-secondary-fixed">¥12,000</span>
                    <span className="opacity-70 ml-1">/年</span>
                  </div>
                  <p className="opacity-70 text-sm mt-4">特典が充実した、個人支援のメインプラン。</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3">
                    <Star className="text-secondary-fixed w-5 h-5 shrink-0" />
                    <span className="text-sm font-bold">入会金 ¥0（リニューアル特別価格）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="text-secondary-fixed w-5 h-5 shrink-0" />
                    <span className="text-sm">定期刊行会報の郵送受取</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Ticket className="text-secondary-fixed w-5 h-5 shrink-0" />
                    <span className="text-sm">主催公演チケットの優待割引</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-secondary-fixed w-5 h-5 shrink-0" />
                    <span className="text-sm">限定イベントへの優先招待</span>
                  </li>
                </ul>
                <button className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold hover:brightness-110 transition-all">Squareで決済する</button>
              </div>

              {/* Corporate Member */}
              <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col border border-outline-variant/20 hover:shadow-xl transition-shadow">
                <div className="mb-8">
                  <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant">Corporate</span>
                  <h3 className="text-2xl font-noto-serif font-bold text-primary mt-4">法人会員</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold text-secondary">¥120,000</span>
                    <span className="text-on-surface-variant ml-1">/年</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-4">文化活動を通じたCSR・ブランディングを支援。</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3">
                    <Building2 className="text-secondary w-5 h-5 shrink-0" />
                    <span className="text-sm">公式サイト・プログラムへのロゴ掲載</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Ticket className="text-secondary w-5 h-5 shrink-0" />
                    <span className="text-sm">主催公演への特別ご招待（4枚〜）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-secondary w-5 h-5 shrink-0" />
                    <span className="text-sm">大使館レセプションへの優先案内</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">Squareで決済する</button>
              </div>
            </div>
          </div>
        </section>

        {/* Join Flow & FAQ */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Flow */}
            <div>
              <h2 className="text-primary font-noto-serif text-3xl font-bold mb-12">入会までの3ステップ</h2>
              <div className="space-y-12 relative">
                <div className="absolute left-8 top-8 bottom-8 w-px bg-outline-variant"></div>
                {[
                  {
                    step: 1,
                    title: "プランの選択",
                    desc: "上のカードからご希望のプランを選択し、「Squareで決済する」ボタンをクリックします。"
                  },
                  {
                    step: 2,
                    title: "Square決済の実行",
                    desc: "Squareのセキュアな決済画面にて、クレジットカード情報をご入力いただきます。"
                  },
                  {
                    step: 3,
                    title: "入会完了メール",
                    desc: "決済完了後、即時にウェルカムメールとデジタル会員証（ライト会員の場合）が届きます。"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 relative">
                    <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl shrink-0 z-10 shadow-md">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-xl text-primary mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-primary font-noto-serif text-3xl font-bold mb-12">よくあるご質問</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "寄付金控除の領収書は発行されますか？",
                    a: "はい、ご希望の方には発行しております。決済完了メールへの返信、またはお問合せフォームより宛名をご指定の上、お申し付けください。"
                  },
                  {
                    q: "マンスリー会員の解約はいつでも可能ですか？",
                    a: "可能です。Squareの管理画面よりご自身で、または弊協会事務局までご連絡いただければ、次回更新日をもって停止いたします。"
                  },
                  {
                    q: "海外からの入会も受け付けていますか？",
                    a: "ルーマニアを含む海外在住の方も歓迎いたします。特典の郵送物に関しては、国によって別途送料をご相談させていただく場合がございます。"
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-surface-container-low rounded-xl overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full flex justify-between items-center p-6 text-left font-bold text-primary hover:bg-surface-container transition-colors"
                    >
                      {faq.q}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 embroidery-pattern pointer-events-none"></div>
          <div className="max-w-2xl mx-auto px-8 relative z-10">
            <h2 className="text-white font-noto-serif text-4xl font-bold mb-6 italic">Together, We Create Harmony.</h2>
            <p className="text-primary-fixed-dim mb-10 text-lg">音楽の力で、境界を越える。今、あなたにできる支援を。</p>
            <button className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
              入会ページへ戻る
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-16 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-noto-serif italic text-2xl text-white block mb-6">JRMS</span>
            <p className="text-white/60 font-manrope text-sm leading-relaxed">
              © 2024 Japan-Romania Music Society. Cultivating harmony through classical excellence.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-secondary-fixed font-bold uppercase text-xs tracking-widest mb-2">Sitemap</h5>
            <a className="text-white/60 hover:text-white transition-colors text-sm" href="#">About Us</a>
            <a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Activities</a>
            <a className="text-secondary-fixed underline text-sm font-bold" href="#">Membership</a>
            <a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Donations</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-secondary-fixed font-bold uppercase text-xs tracking-widest mb-2">Contact</h5>
            <a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Contact Us</a>
            <a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
            <a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
            <div className="flex gap-4 mt-4">
              <Trophy className="text-white/60 w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Globe className="text-white/60 w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Mail className="text-white/60 w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
