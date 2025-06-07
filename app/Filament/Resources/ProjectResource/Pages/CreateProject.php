<?php

namespace App\Filament\Resources\ProjectResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use App\Filament\Resources\ProjectResource;

class CreateProject extends CreateRecord
{
    protected static string $resource = ProjectResource::class;
    protected function getRedirectUrl(): string
    {
        return ProjectResource::getUrl(); // Redirects to the index/list page
    }
}
