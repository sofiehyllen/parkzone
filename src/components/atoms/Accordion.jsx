export default function Accordion() {
  return (
    <div className=''>
      <details className='space-y-7 group max-w-lg bg-gray-300 p-5 rounded-sm'>
        <summary className='flex items-start cursor-pointer list-none '>
          <h5 className='font-h5'>
            Kan jeg stille spørgsmål angående en kontrolafgift, selvom jeg ikke
            har et løbenummer?
          </h5>
          <div className='h-4 w-6 relative'>
            <div className='bg-gray-500 w-4 h-0.5 rounded-full absolute top-1/2 '></div>
            <div className='bg-gray-500 w-4 h-0.5 rounded-full rotate-90 absolute top-1/2 group-open:rotate-180 transition-transform '></div>
          </div>
        </summary>
        <div className='overflow-hidden'>
          <p className='font-body-s transform origin-top transition-transform'>
            Ja, du kan sagtens stille spørgsmål angående en kontrolafgift,
            selvom du ikke har et løbenummer. Husk at sætte hak ved feltet Ej
            tildelt. Husk også at dobbelttjekke om dine kontaktoplysninger er
            indtastet korrekt, da vi bruger dem til at kontakte dig.
          </p>
        </div>
      </details>
    </div>
  );
}
