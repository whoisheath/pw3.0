import Layout from "../components/custom/Layout";
import Head from "next/head";

export default function docs() {
  // handle submit is for sending the contact form data to my discord server
  function handleSubmit(e) {
    e.preventDefault();

    // set globals
    const url = process.env.DISCORD_URL;
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // construct the object to send to discord
    let data = {
      content: "New Contact Alert!",
      username: "contactor",
      tts: false,
      embeds: [
        {
          title: "Contactor Information:",
          fields: [
            {
              name: "**Name**",
              value: name,
              inline: false,
            },
            {
              name: "**Email**",
              value: email,
              inline: false,
            },
            {
              name: "**Message**",
              value: message,
              inline: false,
            },
          ],
        },
      ],
    };
    // console.log(JSON.stringify(data));
    const req = new XMLHttpRequest();
    req.open("post", url, true); // (method, url, async)
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(data));
  }

  return (
    <Layout>
      <Head>
        <title>Get in Touch!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-center text-5xl">Get in Touch</h1>
      <div className="grid">
        <div className="place-self-center shadow-lg grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-heathRows p-5 md:p-10 w-4/6 h-auto">
          <div className="place-self-center">
            <p>
              The best way to contact me is{" "}
              <a
                className="text-success"
                href="https://twitter.com/whoisheath_"
              >
                Twitter
              </a>
              . But, if you fill out the form, a notification will go off in my
              own discord server and I'll get back to you as quickly as
              possible!
            </p>
          </div>
          <div className="p-10">
            <form
              onSubmit={handleSubmit}
              name="contactMeForm"
              id="contactMeForm"
            >
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    id="name"
                    class="pl-3 shadow-sm border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-purple-500 focus:outline-none rounded-md h-8 placeholder-gray-500 focus:placeholder-gray-900"
                    placeholder="Heath"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="mt-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* <!-- Heroicon name: mail --> */}
                    <svg
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email"
                    class="shadow-sm rounded-md h-8 border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-10 focus:border-purple-500 focus:outline-none placeholder-gray-500 focus:placeholder-gray-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 mt-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Hey Heath..."
                  class="pl-3 shadow-sm border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-purple-500 focus:outline-none resize-none placeholder-gray-500 focus:placeholder-gray-900"
                  required
                />
              </div>
              <br />
              <div className="submitButton">
                <button
                  type="submit"
                  class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white p-2 rounded-md w-1/4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="flex col-span-2 place-self-center mt-10">
            <a href="https://www.twitter.com/whoisheath_">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="twitter.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.linkedin.com/in/heathblandford">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="linkedin.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.github.com/heathblandford">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="github.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.last.fm/user/cloolis">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="lastfm.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.instagram.com/whoisheath_">
              <img
                className="w-8 md:w-12 h-8 md:h-12 m-2 md:m-5"
                src="instagram.svg"
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
