<script lang="ts">
  import { flex_players} from '../../players/fantasy_players_2024';
  import { popup } from '@skeletonlabs/skeleton';
  import { Autocomplete } from '@skeletonlabs/skeleton';
  import type { PopupSettings, AutocompleteOption } from '@skeletonlabs/skeleton';
  let format: number = 0, position: number = 0, playerSearch = '';
  // search
  const search_players = flex_players.map(i => ({ label: i.full_name, value: i.player_id, keywords: `${i.first_name} ${i.last_name} ${i.team} ${i.team_abbr}`}));
  const searchOptions: AutocompleteOption<string>[] = search_players;
  function onPlayerSelection(event: CustomEvent<AutocompleteOption<string>>): void {
    playerSearch = event.detail.label;
  }
  let popupSettings: PopupSettings = {
    event: 'focus-click',
    target: 'popupAutocomplete',
    placement: 'bottom',
  };
</script>

<div class="ranking-header justify-between items-end" style="display: flex;">
  <div class="flex-row">
    <div class="format" style="margin-bottom: 1em;">
      <button type="button" class="btn" class:variant-soft-primary={format != 0} class:variant-ghost-primary={format === 0} on:click="{() => format = 0}">Standard</button>
      <button type="button" class="btn" class:variant-soft-primary={format != 1} class:variant-ghost-primary={format === 1} on:click="{() => format = 1}">0.5 PPR</button>
      <button type="button" class="btn" class:variant-soft-primary={format != 2} class:variant-ghost-primary={format === 2} on:click="{() => format = 2}">1 PPR</button>
    </div>
    <div class="position">
      <button type="button" class="btn" class:variant-soft-primary={position != 0} class:variant-ghost-primary={position === 0} on:click="{() => position = 0}">QB</button>
      <button type="button" class="btn" class:variant-soft-primary={position != 1} class:variant-ghost-primary={position === 1} on:click="{() => position = 1}">RB</button>
      <button type="button" class="btn" class:variant-soft-primary={position != 2} class:variant-ghost-primary={position === 2} on:click="{() => position = 2}">WR</button>
      <button type="button" class="btn" class:variant-soft-primary={position != 3} class:variant-ghost-primary={position === 3} on:click="{() => position = 3}">TE</button>
      <button type="button" class="btn" class:variant-soft-primary={position != 4} class:variant-ghost-primary={position === 4} on:click="{() => position = 4}">FLX</button>
      <button type="button" class="btn" class:variant-soft-primary={position != 5} class:variant-ghost-primary={position === 5} on:click="{() => position = 5}">K</button>
      <button type="button" class="btn" class:variant-soft-primary={position != 6} class:variant-ghost-primary={position === 6} on:click="{() => position = 6}">DEF</button>
    </div>
  </div>
  <div>
    <div class="text-token w-full max-w-sm space-y-2">
      <input class="input autocomplete" type="search" name="autocomplete-search" bind:value={playerSearch} placeholder="Search..." use:popup={popupSettings} />
      <div data-popup="popupAutocomplete" class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
        <Autocomplete bind:input={playerSearch} options={searchOptions} on:selection={onPlayerSelection} />
      </div>
    </div>
  </div>
</div>

<div class="ranking-grid grid grid-cols-6 gap-4">
  {#each flex_players as p, i}
    <div class="card flex-col variant-ghost-tertiary p-4 flex justify-center items-center" use:popup={{ event: 'click', target: 'playerCard-' + i, placement: 'top' }}>
      <!--<img class="avatar" src="https://sleepercdn.com/content/nfl/players/thumb/{p.player_id}.jpg" alt="{p.full_name}">-->
      <div><i class="fa-solid fa-user-astronaut"></i></div>
      <div class="name">{p.full_name}</div>
      <div class="matchup">@ DET</div>
      <div class="icons">
        <i class="fa-solid fa-door-open"></i>
        <i class="fa-solid fa-block-brick"></i>
        <i class="fa-solid fa-plane"></i>
        <i class="fa-sharp fa-solid fa-plane-circle-xmark"></i>
        <i class="fa-solid fa-user-ninja"></i>
      </div>
    </div>
    <div class="card p-4 w-72 shadow-xl" data-popup="playerCard-{i}">
      <div>
        <p>{p.full_name}</p>
        <div>

        </div>
      </div>
      <div class="arrow bg-surface-100-800-token" />
    </div>
  {/each}
</div>

<style>
  .ranking-header {
    padding: 2em 0;
  }
  .ranking-grid .card {
    cursor: pointer;
    text-align: center;
  }
  .avatar {
    height: 3em;
    width: 4em;
  }
</style>