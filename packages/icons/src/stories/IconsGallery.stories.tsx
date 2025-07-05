import { AttachmentIcon, BriefcaseIcon } from '../';

export default {
  title: 'Icons/Simple Icons Gallery',
};

const iconsList = [
  [
    { iconComponent: AttachmentIcon, iconName: 'Attachment icon' },
    { iconComponent: BriefcaseIcon, iconName: 'Briefcase icon' },
  ],
];

export const SimpleIconsGallery = () => (
  <>
    <div>Icons:</div>
    {iconsList.map((iconsRow, index) => {
      return (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            marginBottom: '3rem',
            padding: '0 2rem',
          }}
        >
          {iconsRow.map((iconData) => {
            const { iconComponent: IconComponent, iconName } = iconData;
            return (
              <div
                key={iconName}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <IconComponent />
                <p>{iconName}</p>
              </div>
            );
          })}
        </div>
      );
    })}
  </>
);
