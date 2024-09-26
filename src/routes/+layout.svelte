<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppRail, AppRailAnchor, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { page } from '$app/stores';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let currentTile: number = 0;
</script>

<AppShell>
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailAnchor href="/" selected={$page.url.pathname === '/'}><i class="fa-solid fa-user-astronaut"></i></AppRailAnchor>
			</svelte:fragment>
			<!-- --- -->
			<AppRailAnchor href="/rankings" bind:group={currentTile} name="Rankings" value={0} title="Rankings" selected={$page.url.pathname === '/rankings'}>
				<svelte:fragment slot="lead"><i class="fa-solid fa-chart-simple"></i></svelte:fragment>
				<span>Rankings</span>
			</AppRailAnchor>
			<!-- --- -->
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" title="Account"><i class="fa-regular fa-lightbulb"></AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="sidebarRight">
		right content
	</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div style="padding: 1em;"><slot /></div>
	<!-- (footer) -->
</AppShell>