export const Modal = ({children, open, onClose}) => {
  if (!open)
	return null;

  return (
	<div className="overlay">
		<div className="modal">
			<button onClick={onClose}>X</button>
			{children}
		</div>
	</div>
  );
}