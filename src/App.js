import React from 'react'

function App() {
	const [score, setScore] = React.useState(0);
	const scoreClass = score < 0 ? 'low-score' : score > 0 ? 'high-score' : '';
	return (
		<div className='container'>
			<h1>Counter</h1>
			<div className='counter'>
				<span className={`counter-score ${scoreClass}`}>{score}</span>
				<div className='button-group'>
					<button
						className='counter-action decrement'
						onClick={() => setScore(prevScore => prevScore - 1)}
					> - </button>
					<button
						className='counter-action reset'
						onClick={() => setScore(0)}
					> Reset </button>
					<button
						className='counter-action increment'
						onClick={() => setScore(prevScore => prevScore + 1)}
					> + </button>
				</div>
			</div>
		</div>
	)
}

export default App