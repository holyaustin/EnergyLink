import Container from "components/Container";

const faqs = [
  [
    {
      question:
        "What is the EnegyLink project about and how does it relate to Energy Communities?",
      answer:
        "EnegyLink is a web 3 project that provides a platform for the creation and management of Energy Communities. It was inspired by the need to combat climate change and empower local communities in managing their energy resources. This project facilitates collaborative decision-making and investment in renewable energy.",
    },
    {
      question: "What benefits can I gain from creating an Energy Community?",
      answer:
        "By creating an Energy Community, you get the opportunity to take control of your energy resources and decisions. You can share energy within your community or with third-party providers, track your contributions to green energy production, and monitor CO2 emissions reduction.",
    },
    {
      question:
        "How does the autonomous governance system work in the Energy Communities?",
      answer:
        "The autonomous governance system allows community members to participate in decision-making processes. This could include deciding who joins the community, determining the amount of money to raise for renewable energy projects, and other decisions that could lead to significant community gains.",
    },
  ],
  [
    {
      question:
        "What is the process for onboarding members into my Energy Community?",
      answer:
        "The process for onboarding members into your Energy Community will depend on the governance decisions made by the community. The EnegyLink platform supports you throughout this process, ensuring a smooth and straightforward experience.",
    },
    {
      question:
        "Can you explain how the financing process works, especially the crowdlending campaigns for renewable energy projects?",
      answer:
        "The financing process involves participating in crowdlending campaigns, where every participant can contribute towards renewable energy projects. This democratic funding model allows everyone in the community to have a stake in local energy infrastructure.",
    },
    {
      question:
        "How does energy sharing work in the Energy Communities? Can this be extended to third-party providers?",
      answer:
        "Energy sharing in the Energy Communities is facilitated by our platform. Community members can share energy amongst themselves or even with third-party providers, enhancing the community's sustainability and energy independence.",
    },
  ],
  [
    {
      question:
        "What metrics are available through the sustainability tracking feature? How can I understand the impact of my investments?",
      answer:
        "The sustainability tracking feature lets you monitor your contributions to green energy production and your role in reducing CO2 emissions. It offers clear metrics and visuals that help you understand the tangible impact of your investments on the environment.",
    },
    {
      question:
        "How does being a part of an Energy Community contribute to community growth and sustainable energy development?",
      answer:
        "Being part of an Energy Community allows you to witness firsthand how your initial investment catalyzes sustainable energy development. It sets a new standard for investors and contributes to the growth of your community by creating local jobs and reducing reliance on external energy suppliers.",
    },
    {
      question:
        "What are some ways in which the platform helps users in decision-making processes for buying and selling energy?",
      answer:
        "Leveraging insights from our network of industry insiders, our platform provides information on when to buy energy to maximize profit and when to sell to avoid losses. This market intelligence empowers Energy Communities to make informed decisions that align with their goals and financial strategies.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="order-t·border-gray-200 bg-green-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
        </div>
        <div className="divider"></div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li
                    key={faqIndex}
                    className="rounded-2xl border border-gray-300 p-8 hover:animate-fade-in hover:border-gray-600"
                  >
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
