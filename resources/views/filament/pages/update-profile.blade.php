<x-filament::page>
    <form wire:submit.prevent="updateProfile">
        {{ $this->form }}

        <x-filament::button type="submit" style="margin-top: 2rem;">
            Update Profile
        </x-filament::button>
    </form>
</x-filament::page>
