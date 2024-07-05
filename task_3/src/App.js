import img from './dish_deathclaw_steak.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe: Deathclaw Steak</h1>
      </header>
      <body>

        <div className='Dish-description'>
          A delicacy for the brave and seasoned wasteland chefs,
          Deathclaw Steak is a hearty and flavorful dish that
          showcases the finest meat the wasteland has to offer.
          Sourced from the formidable Deathclaw, this steak is
          not only a testament to a hunter’s skill but also a
          treat for those lucky enough to savor its rich, gamey taste.
        </div>
        <fieldset className='Ingredients-container'>
          <img src={img}
            className="Dish-img"
            alt="img"
            title="Deathclaw Steak" />
          <div className='Dish-ingredients'>
            <h3>Ingredients:</h3>
            <ul>
              <li>1 Deathclaw meat steak (approximately 1 pound)</li>
              <li>2 tablespoons Nuka-Cola Quantum (for marinating)</li>
              <li>2 tablespoons Mirelurk butter (or regular butter, if unavailable)</li>
              <li>1 teaspoon crushed Bloodleaf (for seasoning)</li>
              <li>1 teaspoon crushed Thistle (for seasoning)</li>
              <li>1 teaspoon Blight (for seasoning)</li>
              <li>Salt and pepper to taste</li>
              <li>Freshly picked Mutfruit slices (for garnish)</li>
            </ul>
          </div>
        </fieldset>
        <h2>Instructions:</h2>
        <ul>
          <li>Preparation:
            <ul>
              <li>Begin by cleaning the Deathclaw meat thoroughly,
                removing any excess fat and sinew. Ensure the meat
                is fresh for the best flavor.
              </li>
            </ul>
          </li>
          <li>Marination:
            <ul>
              <li>In a shallow dish, pour the Nuka-Cola Quantum over
                the Deathclaw meat. This unique ingredient helps to
                tenderize the meat and infuse it with a subtle sweetness.
              </li>
              <li>Allow the meat to marinate for at least 1 hour, or
                overnight for a deeper flavor.
              </li>
            </ul>
          </li>
          <li>Seasoning:
            <ul>
              <li>After marinating, remove the meat and pat it dry with
                a clean cloth.
              </li>
              <li>In a small bowl, mix the crushed Bloodleaf, Thistle,
                Blight, salt, and pepper.
              </li>
              <li>Rub the seasoning mixture evenly over both sides of
                the Deathclaw steak.
              </li>
            </ul>
          </li>
          <li>Cooking:
            <ul>
              <li>Heat a skillet over medium-high heat and add the
                Mirelurk butter.
              </li>
              <li>Once the butter is melted and sizzling, place the
                Deathclaw steak in the skillet.
              </li>
              <li>Sear the steak for 4-5 minutes on each side, or until
                a nice crust forms. The inside should be cooked to your
                preference (medium-rare is recommended to maintain the
                meat’s tenderness and flavor).
              </li>
            </ul>
          </li>
          <li>Resting:
            <ul>
              <li>Remove the steak from the skillet and let it rest on a
                cutting board for about 5 minutes. This allows the juices
                to redistribute throughout the meat, ensuring every bite is
                succulent and flavorful.
              </li>
            </ul>
          </li>
          <li>Serving:
            <ul>
              <li>Slice the Deathclaw steak against the grain into thick slices.
              </li>
              <li>Garnish with freshly picked Mutfruit slices for a pop of
                color and a hint of sweetness that complements the savory steak.
              </li>
              <li>Serve with your favorite wasteland side dishes, such as roasted
                Tato or a fresh Siltbean salad.
              </li>
            </ul>
          </li>
        </ul>
        <h3>Notes:</h3>
        <ul>
          <li>Be cautious when hunting for Deathclaw meat, as these creatures
            are incredibly dangerous. Always go prepared and preferably with backup.
          </li>
          <li>If Nuka-Cola Quantum is unavailable, regular Nuka-Cola can be substituted,
            though the flavor will be slightly differen.
          </li>
          <li>This dish pairs well with a glass of Ice Cold Sunset Sarsaparilla or a
            refreshing Vim! Quartz.
          </li>
        </ul>
     
<p>Enjoy your Deathclaw Steak, a true feast for any wasteland survivor!</p>
      </body>
    </div>
  );
}

export default App;
