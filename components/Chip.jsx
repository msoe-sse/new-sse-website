import '../styles/Chip.css';
export default function Chip({ label, onClick }) {
  return (
    <div className="chip" onClick={onClick}>
        {label}
    </div>
    );
}