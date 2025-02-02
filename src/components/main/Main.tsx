import { PeopleGraph } from './PeopleGraph';
import { ReadMoreBtn } from './ReadMoreBtn';

export const Main = () => (
  <main className="mb-40 mt-12 h-[600px] ">
    <div className="relative h-full lg:flex lg:justify-between">
      <div className="translate-w-[-30%] absolute left-[0] top-0 z-0 h-full w-[calc(60%)] transform opacity-20 lg:-ml-32 lg:opacity-100">
        <PeopleGraph />
      </div>
      <div className="z-10 mt-6 lg:w-1/2">
        <h3 className="text-4xl">ברוכים הבאים לקהילת</h3>
        <h1 className="mt-1 text-6xl">Juniors for Juniors</h1>
        <p className="my-12 text-2xl">
          קהילת Juniors for Juniors (או J4J) היא מקום שבו ג׳וניורים בתחומים
          שונים בהייטק יכולים לשתף פעולה אחד עם השני על ידי עזרה ותמיכה בנושאים
          שונים, כמו: כלים למציאת עבודה, קבוצות למידה במגוון תחומים והכנת
          פרויקטים משותפים.
        </p>
        <ReadMoreBtn />
      </div>
    </div>
  </main>
);

/* <main className="mt-12 h-[calc(100vh-80px)]"> */

// h-[732px] w-[816px]
