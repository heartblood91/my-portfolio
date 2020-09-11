import React from "react";

const SnippetForContact = (props) => {
  return (
    <pre>
      <code>
        <div
          style={{
            color: "rgb(212, 212, 212)",
          }}
        >
          <div>
            <span style={{ color: "rgb(197,134,192)" }}>if </span>(
            <span style={{ color: "rgb(156,220,254)" }}>you</span>
            &nbsp;===&nbsp;
            <span style={{ color: "rgb(206,145,120)" }}>"entreprise"</span>
            &nbsp;&amp;&amp;&nbsp;
            <span style={{ color: "rgb(156,220,254)" }}>search</span>
            &nbsp;===&nbsp;
            <span style={{ color: "rgb(206,145,120)" }}>
              "developpeur Full Stack"
            </span>
            )&nbsp;&#123;
          </div>
          <div>
            <span
              style={{
                color: "rgb(220,220,170)",
                paddingLeft: "20px",
              }}
            >
              sendMe
            </span>
            (<span style={{ color: "rgb(156,220,254)" }}>aMail</span>
            ,&nbsp;
            <span style={{ color: "rgb(156,220,254)" }}>withCoordinate</span>
            );
          </div>
          <div>
            &#125;&nbsp;
            <span style={{ color: "rgb(197,134,192)" }}>else</span>
            &nbsp;&#123;
          </div>
          <div>
            <span
              style={{
                color: "rgb(134, 199, 255)",
                paddingLeft: "20px",
              }}
            >
              new&nbsp;
            </span>
            <span style={{ color: "rgb(78,201,176)" }}>Promise</span>
            ((
            <span style={{ color: "rgb(220,220,170)" }}>resolve</span>
            ,&nbsp;
            <span style={{ color: "rgb(220,220,170)" }}>reject</span>
            )&nbsp;
            <span style={{ color: "rgb(134, 199, 255)" }}>=&gt;</span>
            &nbsp;&#123;
          </div>
          <div>
            <span
              style={{
                color: "rgb(220,220,170)",
                paddingLeft: "40px",
              }}
            >
              partage
            </span>
            (<span style={{ color: "rgb(156,220,254)" }}>myWebSite</span>
            ,&nbsp;
            <span style={{ color: "rgb(156,220,254)" }}>EveryBody</span>
            );
          </div>
          <div style={{ paddingLeft: "20px" }}>&#125;)</div>
          <div style={{ paddingLeft: "40px" }}>
            .<span style={{ color: "rgb(220,220,170)" }}>then</span>
            ((
            <span style={{ color: "rgb(156,220,254)" }}>res</span>
            )&nbsp;
            <span style={{ color: "rgb(134, 199, 255)" }}>=&gt;&nbsp;</span>
            <span style={{ color: "rgb(220,220,170)" }}>thanks</span>(
            <span style={{ color: "rgb(156,220,254)" }}>you</span>
            ,&nbsp;
            <span style={{ color: "rgb(156,220,254)" }}>SoMuch</span>
            ))
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <span>.</span>
            <span style={{ color: "rgb(220,220,170)" }}>catch</span>
            ((
            <span style={{ color: "rgb(156,220,254)" }}>err</span>
            )&nbsp;
            <span style={{ color: " rgb(134, 199, 255)" }}>=&gt;&nbsp;</span>
            <span style={{ color: "rgb(220,220,170)" }}>bye</span>(
            <span style={{ color: "rgb(156,220,254)" }}>you</span>
            ,&nbsp;
            <span style={{ color: "rgb(156,220,254)" }}>seeYouSoon</span>
            ));
          </div>
          <div>
            <span>&#125;</span>
          </div>
        </div>
      </code>
    </pre>
  );
};

export default SnippetForContact;
