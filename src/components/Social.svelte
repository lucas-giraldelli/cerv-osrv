<script lang="ts">
  import SocialIcons from '@rodneylab/svelte-social-icons';
  import type { SocialIconsProps } from '@rodneylab/svelte-social-icons/types/SocialIcons.svelte';

  export let network: SocialIconsProps['network'];
</script>

<SocialIcons {network} bgColor="#0f172a" fgColor="white" />
