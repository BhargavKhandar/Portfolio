<?php

namespace App\Filament\Pages;

use Filament\Forms;
use Filament\Pages\Page;
use Illuminate\Support\Facades\Hash;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Auth;

class UpdateProfile extends Page implements Forms\Contracts\HasForms
{
    use Forms\Concerns\InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-user-circle';
    protected static string $view = 'filament.pages.update-profile';
    protected static ?string $navigationLabel = 'Update Profile';
    protected static ?int $navigationSort = 99;

    public $name;
    public $email;
    public $password;

    public function mount(): void
    {
        $user = auth()->user();
        $this->name = $user->name;
        $this->email = $user->email;
    }

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\TextInput::make('name')
                ->label('Full Name')
                ->required(),

            Forms\Components\TextInput::make('email')
                ->email()
                ->required(),

            Forms\Components\TextInput::make('password')
                ->password()
                ->label('New Password')
                ->nullable()
                ->minLength(6),
        ];
    }

    public function updateProfile()
    {
        $user = auth()->user();
        $user->name = $this->name;
        $user->email = $this->email;

        $passwordChanged = false;

        if ($this->password) {
            $user->password = \Hash::make($this->password);
            $passwordChanged = true;
        }

        $user->save();

        if ($passwordChanged) {
            auth()->logout();

            session()->invalidate();
            session()->regenerateToken();

            return redirect()->route('filament.admin.auth.login');
        }

        Notification::make()
            ->title('Profile Updated')
            ->success()
            ->send();
    }
}
