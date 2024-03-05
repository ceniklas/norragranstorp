export default function Home() {
  return (
    <>
      <div className="container mx-auto p-16">
        <h1 className="my-8 text-5xl font-extrabold">Nyheter</h1>

        {/* <div className="w-full h-screen bg-green-300"></div> */}
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>

        <div className="flex flex-col font-sans ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-4 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-4 py-4 dark:border-white/10"
                      >
                        Andel
                      </th>

                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-4 py-4 dark:border-white/10"
                      >
                        Årsavgift
                      </th>

                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-4 py-4 dark:border-white/10"
                      >
                        Reparationsfond
                      </th>

                      <th scope="col" className="px-4 py-4">
                        Totalt
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        Permanentbostad
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        1910
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        764
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        2674
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        Fritidsbostad
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        1050
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        420
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        1470
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        Obebyggd tomt
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        191
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        76
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        267
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        Skogsmark
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        4774
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        1910
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-4 font-medium dark:border-white/10">
                        6684
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
