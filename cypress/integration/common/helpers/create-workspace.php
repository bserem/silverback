<?php

/** @var $args mixed */
list($machine_name, $label, $path) = [$args->workspace, $args->label, $args->path];

/** @var \Drupal\workspaces\WorkspaceStorage $workspaceStorage */
$workspaceStorage = \Drupal::entityTypeManager()->getStorage('workspace');

$workspaceStorage->create([
  'id' => $label,
  'label' => $label,
  'path_prefix' => $path,
])->save();

