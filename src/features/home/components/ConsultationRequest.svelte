<script lang="ts">
	import { ArrowUpRight, Mail } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	let topic = $state('metabolic');
	const topics = ['metabolic', 'nutrition', 'general'];
	const emailHref = $derived(
		`mailto:halo@doktermetabolik.id?subject=${encodeURIComponent($_('care.request.subject'))}&body=${encodeURIComponent($_('care.request.body', { values: { topic: $_(`care.request.topics.${topic}`) } }))}`,
	);
</script>

<Card.Root class="request-card rounded-2xl border-0 bg-sage p-7 shadow-none sm:p-9" data-ui>
	<Card.Header class="gap-3 p-0"
		><div class="flex items-center justify-between gap-4">
			<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">{$_('care.request.title')}</h3>
			<Mail class="size-5 text-primary" aria-hidden="true" />
		</div>
		<Card.Description class="text-sm leading-6 text-muted-foreground"
			>{$_('care.request.description')}</Card.Description
		></Card.Header
	>
	<Card.Content class="p-0">
		<RadioGroup.Root
			bind:value={topic}
			aria-label={$_('care.request.topicLabel')}
			class="mt-7 gap-3"
		>
			{#each topics as value (value)}
				<Label
					for={`topic-${value}`}
					class="topic-option flex min-h-14 cursor-pointer items-center gap-4 rounded-xl bg-background px-4 py-4 text-sm font-medium transition-colors has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring"
				>
					<RadioGroup.Item
						id={`topic-${value}`}
						{value}
						class="size-4 border border-current bg-transparent text-current [&_[data-slot=radio-group-indicator]_svg]:bg-current"
					/>
					{$_(`care.request.topics.${value}`)}
				</Label>
			{/each}
		</RadioGroup.Root>
	</Card.Content>
	<Card.Footer class="flex-col items-stretch gap-4 p-0 pt-7"
		><Button href={emailHref} class="action-button w-full justify-between"
			>{$_('care.request.send')}<ArrowUpRight aria-hidden="true" /></Button
		>
		<p class="text-sm leading-6 text-muted-foreground">{$_('care.request.note')}</p></Card.Footer
	>
</Card.Root>
