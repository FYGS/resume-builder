import { IEducation } from 'src/stores/index.interface';
import { dateParser } from 'src/helpers/utils';

export const Education = ({ education }: { education: IEducation[] }) => {
  return (
    <>
      {education.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <p className="font-medium text-xs">
                {item.studyType} - {item.area}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <p className="font-medium text-xs">{item.institution}</p>
                  <div className="text-xs italic">
                    {item.location && <span>, </span>}
                    {item.location}
                  </div>
                </div>
                <div className="flex gap-3">
                  <p className="text-xs italic">
                    {dateParser(item.startDate)} -
                    {item.isStudyingHere ? 'present' : dateParser(item.endDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
