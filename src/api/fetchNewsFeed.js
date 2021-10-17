//dummied up response
export const newsPromise = Promise.resolve(newsFeedData());

export function newsFeedData() {
  return Array.from({ length: 100 }, (_, idx) => {
    const shares = Math.floor(Math.random() * 1000);
    const duration = Math.floor(Math.random() * 10);

    const story1 =
      "16 American missionaries returning from Haiti orphanage kidnapped by notorious gang";
    const story2 =
      "Biden says DOJ should prosecute those who defy January 6 committee subpoenas";
    const useStory1 = Math.random() < 0.5;

    const story = useStory1 ? story1 : story2;
    return {
      id: idx,
      headline: story,
      shares,
      source: "CNN",
      duration,
      links: [
        {
          title: "story title",
          url: "story link",
        },
        {
          title: "alt",
          url: "image url",
        },
      ],
      errors: [],
      isTopStory: true,
      moreItems: "news/v1?start=20",
    };
  });
}
