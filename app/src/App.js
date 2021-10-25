import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-background"/>
      <header className="Search-Bar">
        <form action="/" method="get">
            <input  
                type="text"
                id="header-search"
                placeholder="Search stocks"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>
        
        <button class="tablink" onclick="openContent('Top_Stocks', this, '#ed9d09')" id ="defaultOpen"> Top Stocks </button>
        <button class="tablink" onclick="openContent('My_Stocks', this, '#ed9d09')"> My Stocks </button>
        <button class="tablink" onclick="openContent('How_it_Works', this, '#ed9d09')"> How it Works </button>
        <button class="tablink" onclick="openContent('Get_Started', this, '#ed9d09')"> Get started </button>
        <button class="tablink" onclick="openContent('Log_In', this, '#ed9d09')"> Log in </button>

        
      </header>
    </div>
  )
}


export default App;