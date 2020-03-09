const { introduction } = require("../consts/introduction.ts");

const metaAuthor = introduction.author.join(",");
const metaTopic = introduction.topic.chs
  .concat(introduction.topic.eng)
  .join(",");
const metaSum = introduction.title.chs.concat(introduction.title.eng).join(",");

export default {
  title: "宫不上叔",
  meta: [
    {
      charset: "utf-8"
    },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
    },
    {
      hid: "description",
      name: "description",
      content: "宫不上的诗歌，宫不上的远方，宫不上的年华"
    },
    {
      name: "summary",
      content: metaSum
    },
    {
      name: "author",
      content: metaAuthor
    },
    {
      name: "topic",
      content: metaTopic
    },
    {
      name: "og:email",
      content: "gongbaodd@qq.com"
    },
    {
      name: "og:type",
      content: metaTopic
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "icon.png"
    }
    // {
    //   rel: "stylesheet",
    //   as: "style",
    //   href:
    //     "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css",
    //   onload: ""
    // }
  ]
};
