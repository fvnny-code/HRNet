
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { GLobalStateProvider } from './GlobalState.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <GLobalStateProvider>
    <App />
    </GLobalStateProvider>
    

)
