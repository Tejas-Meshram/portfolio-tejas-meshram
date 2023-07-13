import React from 'react'
import aboutImg from '../assets/images/tejas.png'

const cv_download_url = "https://doc-14-9k-docs.googleusercontent.com/docs/securesc/semn5ek42uvmu6emh05eo4ljfu6u9ksu/bk8abn4qnroo8t8gudn0r2o2iffutg04/1689134625000/06543448129184366991/06543448129184366991/1qJWac5gjq2BOx0NkoJhllQYOEchfZVY3?e=download&ax=AGtFMPWf7BajFgIcxgh4q4i-raE-F4S_Di4zMyV_YXiMvIqZgDl46OCCi035iBkvLWkdRilyqmxhuGWGBXZn3iWIXwDO0G-RzSpuQ5TZiE-03gBygEgF1FDoaCKBietNq5cH4Gl_8aOeyM4g4E5HNOtv8VhFOobuIPnSjh12-uxVjHPUtDlrfF22GuKhRx-9mweQDzysfaaLvLAuV-0mxvrNRjaMt2Y3wHgVQN7zEhn951Y1IcCYjLxyiWiqzaeQ7-f-vy3f9Nh4xNqQ4eAJp076k5DrSFS1958hCmpjNib4YmHIJq59RFWJSr_pQv-a_i3ziqQnUQXRP0sAKb2GHRZF3dL9jGFQyCUO-KaXc1SLMLvFvd0x5zE3pPED6UsqONYoCodSwpDgYxRT0S5pnC0o_hmuW4fjJTWVnmMLJU2hBiHlRkLIpAAA28eSTfXKpVNAGh5ICH5O0z77l3Z17x0LbXSGoEcN-dmLzULLmaIoAwp2XF1ckSZtz1ferbY6n3NtfxWmtDtnV_JO6k3BF8a00qkdPTEMhBvXvoAoNXJte90HYnDA-rMVn-XWRQCmw7YCOdQicqttoAfXc5HCrn88B-95p080w2AJ2_r7y0d9njrUeBtCREGL9CmOSfxs6xY9h1d4PuyvsgTBybrDuFE1P8qFFNaG0D2zCU7TTtYNbdiZ-j3fKpJ3TKeltDovQ-Jco7E1goLxvY8IKbJ_qmeY5dQui59ilH5AUej19-HvebKX0vj1l6eDesrTwste6cAjHJLCsBuG8ie_CNrwoaZ64E9EBt76a8PbqijmRDvCrphmxDV7tiG-wGbg_6jUY1uEqdCaY2EqlTe-5gXEC6Z6wocqCA92Yuy27eArEgiGbCQqwag7gO8SsXHhYFSLfd7Eswr6k3mSg6HbsTYyeNeML4O7agfh2ln3hxZhcZFawBAe6-flNV0QSGKuFa0IZ_2_3Xy32GfNbjzFPuw8n8jLoQ3-4-tb7GiMz-sf5tPOd-VJRRENlP5ERZH7UeGkw4v3qqMkgrXNtKQ-NRTv&uuid=f1f03f83-6a99-4ca5-ad91-5ae240c76618&authuser=0&nonce=90sfdcaci0a68&user=06543448129184366991&hash=qtakg3n3o2n4vboi2071nbs81vo7unfb"; 

function About() {

  const info = [
    {text: 'Years experience', count: '03'},
    {text: 'Completed Projects', count: '08'},
    {text: 'Companies Work', count: '01'},
  ];
    return (
      <section id="about" className="py-10 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            About <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">My introduction</p>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                Software Engineer with 3+ years of experience helping clients maintain smooth operations. Finding effective solutions to technical issues through troubleshooting and issue analysis. Hands-on experience in building React Components.
                </p>
                <div className="flex mt-10 items-center gap-7">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count}
                        <span className="text-cyan-600">+</span>{" "}
                      </h3>
                      <span className="md:text-base text-xs">{content.text}</span>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <a href={cv_download_url} download>
                  <button className="btn-primary">Download CV</button>
                </a>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                <img
                  src={aboutImg}
                  alt=""
                  className="w-full object-cover bg-cyan-600 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About