<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ArrowLeft } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { appPath } from '$lib/site.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator,
	} from '$lib/components/ui/breadcrumb/index.js';

	let {
		breadcrumbs = [],
		backHref,
	}: {
		breadcrumbs?: { label: string; href?: string }[];
		backHref?: string;
	} = $props();
</script>

{#if breadcrumbs.length || backHref}
	<div
		in:fly={{ y: -4, duration: 180 }}
		class="flex flex-wrap items-center justify-between gap-3 py-5 motion-reduce:transition-none"
	>
		<Breadcrumb aria-label={$_('navigation.breadcrumb')}>
			<BreadcrumbList>
				<BreadcrumbItem>
					{#if breadcrumbs.length}
						<BreadcrumbLink href={appPath('/')}>{$_('navigation.home')}</BreadcrumbLink>
					{:else}
						<BreadcrumbPage>{$_('navigation.home')}</BreadcrumbPage>
					{/if}
				</BreadcrumbItem>
				{#each breadcrumbs as crumb (crumb.href ?? crumb.label)}
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						{#if crumb.href}
							<BreadcrumbLink href={appPath(crumb.href)}>{crumb.label}</BreadcrumbLink>
						{:else}
							<BreadcrumbPage>{crumb.label}</BreadcrumbPage>
						{/if}
					</BreadcrumbItem>
				{/each}
			</BreadcrumbList>
		</Breadcrumb>
		{#if backHref}
			<Button href={appPath(backHref)} variant="ghost" size="sm" class="group gap-1.5">
				<ArrowLeft
					aria-hidden="true"
					class="transition-transform duration-200 group-hover:-translate-x-1"
				/>
				{$_('navigation.back')}
			</Button>
		{/if}
	</div>
{/if}
