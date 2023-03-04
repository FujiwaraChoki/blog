import Script from 'next/script'
import BLOG from '../../blog.config'

const Scripts = () => (
  <>
    {BLOG.analytics && BLOG.analytics.provider === 'cf' && (
      <Script
        src={BLOG.analytics.cfConfig.scriptUrl}
        strategy='afterInteractive'
        data-cf-beacon={BLOG.analytics.cfConfig.token}
      />
    )}
    {BLOG.analytics && BLOG.analytics.provider === 'umami' && (
      <Script
        src={BLOG.analytics.umamiConfig.scriptUrl}
        strategy='afterInteractive'
        data-website-id={BLOG.analytics.umamiConfig.websiteId}
      />
    )}
    {BLOG.analytics && BLOG.analytics.provider === 'ackee' && (
      <Script
        src={BLOG.analytics.ackeeConfig.tracker}
        strategy='afterInteractive'
        data-ackee-server={BLOG.analytics.ackeeConfig.dataAckeeServer}
        data-ackee-domain-id={BLOG.analytics.ackeeConfig.domainId}
      />
    )}
    {BLOG.analytics && BLOG.analytics.provider === 'ga' && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.analytics.gaConfig.measurementId}`}
        />
        <Script strategy='lazyOnload' id='ga'>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${BLOG.analytics.gaConfig.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
    {/* {BLOG.autoCollapsedNavBar === true && (
      <Script strategy='lazyOnload'>
        {`var windowTop=0;
          function scrollTrigger(){
              let scrollS = window.scrollY;
              let nav = document.querySelector('.sticky-nav');
              if(scrollS >= windowTop){
                  nav.style.opacity = 0;
                  windowTop = scrollS;
              }else{
                  nav.style.opacity = 1;
                  windowTop = scrollS;
              }
          };
          window.addEventListener('scroll',scrollTrigger);`}
      </Script>
    )} */}
    <Script
      async="true"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9323484475971782"
      crossOrigin="anonymous"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
              (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})
              (document.createElement('script'),'https://inklinkor.com/tag.min.js',5732276,document.body||document.documentElement);
            `
      }}
    />
  </>
)

export default Scripts
