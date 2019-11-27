import React from 'react'

export declare type DemoContextType = {
	folders: {name: string, icon: string, selected?: boolean}[],
	drives: {
			name: string,
			letter: string,
			icon: string,
			size: number,
			free: number,
			scale: string,
			hint?: string,
			selected?: boolean
		}[]
}

const DemoContext = React.createContext(undefined as unknown as DemoContextType)

const { Provider, Consumer } = DemoContext

export {
	Provider as DemoContextProvider,
	Consumer as DemoContextConsumer
}
