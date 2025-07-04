export const Modal = ({children, open, onClose}) => {
  if (!open)
	return null;

  return (
	<div className="overlay">
		<div className="modal">
			<button className="close-modal" onClick={onClose}>X</button>
			{children}
		</div>
	</div>
  );
}