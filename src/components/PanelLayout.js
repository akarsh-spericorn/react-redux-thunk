import Button from './Button';
const PanelLayout = ({ children, ...props }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">{props.label}</h1>
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={props.onHeaderButtonClick}
          loading={props.onButtonLoad}
        >
          {props.buttonName}
        </Button>
      </div>

      {children}
    </>
  );
};

export default PanelLayout;
