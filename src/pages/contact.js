import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { css } from "@emotion/core"

export default function Contact({ location }) {
  return (
    <Layout>
      <SEO
        title="Social information"
        description="Hoai's social networks details"
        pathname={location.pathname}
      />
      <main
        css={css`
          text-align: center;
        `}
      >
        <p>
          <a
            href="mailto:arnaud.valensi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
        <p>
          <a
            href="https://github.com/hthoai"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/hthoai"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/hthoai1006"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
      </main>
    </Layout>
  )
}
