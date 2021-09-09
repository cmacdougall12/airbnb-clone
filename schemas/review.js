export default {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "reviewDescription",
      title: " Reveiew",
      type: "string",
    },
    {
      name: "traveller",
      title: " Traveller",
      type: "string",
    },
    {
      name: "rating",
      title: " Rating",
      type: "string",
      options: {
        list: [
          { title: "5 Starts", value: "5-starts" },
          { title: "5 Starts", value: "5-starts" },
          { title: "5 Starts", value: "5-starts" },
          { title: "5 Starts", value: "5-starts" },
          { title: "5 Starts", value: "5-starts" },
        ],
        layout: 'radio'
      },
    },
  ],
};
