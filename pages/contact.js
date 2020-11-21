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
      <h1 className="title">Get in Touch</h1>
      <div className="container">
        <div className="contact-para">
          <p>
            The best way to contact me is{" "}
            <a href="https://twitter.com/whoisheath_">Twitter</a>. But, if you
            fill out the form, a notification will go off in my own discord
            server and I'll get back to you as quickly as possible!
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit} name="contactMeForm" id="contactMeForm">
            <label for="firstname">Your Name</label>
            <br />
            <input
              id="name"
              type="text"
              name="firstname"
              placeholder="Heath"
              autoFocus
              required
            />
            <br />
            <label for="email">Email</label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="heath.blandford@gmail.com"
              required
            />
            <br />
            <label for="message">Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              rows="10"
              cols="50"
              placeholder="nice site dawg! want to work for us?"
              required
            />
            <br />
            <div className="submitButton">
              <button type="submit">Send it!</button>
            </div>
          </form>
          <div className="bottom-socials">
            <a href="https://www.twitter.com/whoisheath_">
              <img src="twitter.svg" alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/heathblandford">
              <img src="linkedin.svg" alt="twitter" />
            </a>
            <a href="https://www.github.com/heathblandford">
              <img src="github.svg" alt="twitter" />
            </a>
            <a href="https://www.last.fm/user/cloolis">
              <img src="lastfm.svg" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/whoisheath_">
              <img src="instagram.svg" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
