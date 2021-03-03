const AllQuizes = [
  {
    question:
      "Which network connections are used by AWS Snowball to minimize data transfer times?",
    choices: [
      {
        label: "both UTP and STP copper cables"
      },
      {
        label: "both USB and Ethernet cables with special adapters"
      },
      {
        label: "both thinnet and thicknet copper cables"
      },
      {
        label: "both RJ45 and SFP+ with either a fiber or copper interface"
      }
    ],
    answers: [3],
    help: "An AWS Snowball appliance has a 10GBaseT network connection (both RJ45 as well as SFP+ with either a fiber or copper interface) to minimize data transfer time."
  },
  {
    question: "Question?",
    choices: [
      {
        label: "Choice"
      },
      {
        label: "Choice"
      },
      {
        label: "Choice"
      },
      {
        label: "Choice"
      }
    ],
    answers: [3],
    help: "No Help"
  }
];

export default AllQuizes;
