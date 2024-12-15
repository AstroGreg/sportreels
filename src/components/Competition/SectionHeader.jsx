
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const SectionHeader = ({
    title,
    isOpen,
    toggle
  }: {
    title: string;
    isOpen: boolean;
    toggle: () => void;
  }) => (
    <div
      className="flex items-center justify-between px-3 py-3 transition-colors bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
      onClick={toggle}
    >
      <span className="font-semibold text-gray-800">{title}</span>
      {isOpen ? <FiChevronUp className="text-gray-600" /> : <FiChevronDown className="text-gray-600" />}
    </div>
  );

  export { SectionHeader }